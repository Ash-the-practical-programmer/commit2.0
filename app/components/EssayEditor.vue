<template>
<div class="card bg-base-100 border border-base-200">
  <!-- Toolbar -->
  <div class="p-4 border-b border-base-300 flex items-center gap-2">
    <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'font-bold': editor.isActive('bold') }">B</button>
    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'italic': editor.isActive('italic') }">I</button>
    <button @click="editor.chain().focus().toggleHighlight({ color: '#ffe58f' }).run()">Highlight</button>
    <button @click="runGeminiAnalysis" class="ml-auto btn btn-sm btn-primary">Analyze with Gemini</button>
  </div>

  <!-- Editor Area -->
  <editor-content :editor="editor" class="ltr text-left p-6 prose max-w-none min-h-[400px]" />

  <!-- Word Count -->
  <div class="p-4 text-sm text-base-content/60">
    {{ wordCount }} words • {{ charCount }} characters
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import AiSuggestion from '@tiptap/pro-extension-ai-suggestion'

const editor = ref<Editor | null>(null)
const wordCount = ref(0)
const charCount = ref(0)

editor.value = new Editor({
content: `<p>Introduction</p><p>The genesis of my academic journey began...</p>`,
extensions: [
  StarterKit,
  Highlight.configure({
    multicolor: true,
    HTMLAttributes: { class: 'bg-yellow-100 px-1 rounded-sm' }
  }),
  AiSuggestion.configure({
    async onTextChange({ editor }) {
      const text = editor.state.doc.textContent
      const res = await $fetch('/api/analyze', {
        method: 'POST',
        body: { text }
      })
      editor.commands.applyAiSuggestions(res.suggestions)
    }
  })
],
onUpdate({ editor }) {
  const text = editor.state.doc.textContent
  wordCount.value = text.trim().split(/\s+/).filter(Boolean).length
  charCount.value = text.length
},
editorProps: {
  attributes: {
    class: 'outline-none text-left',
    spellcheck: 'true',
    autocomplete: 'on',
    autocorrect: 'on',
    dir: 'ltr'
  }
}
})

const runGeminiAnalysis = () => {
editor.value?.commands.runAiSuggestion()
}
</script>

<style scoped>
.ProseMirror [data-tiptap-suggestion] {
background-color: rgba(255, 200, 0, 0.15);
border-bottom: 1px dotted #eab308;
cursor: pointer;
}

.ProseMirror .tiptap-ai-suggestion--selected {
background: #fef3c7;
}
</style>
