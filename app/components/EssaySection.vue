<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
type HighlightType = 'tone' | 'style' | 'grammar' | 'emotion'

interface Highlight {
  start: number
  end: number
  text: string
  type: HighlightType
  message: string
  suggestion: string
}
const { suggestions, analyze } = useGeminiSuggestions()
const props = defineProps<{ title: string, content: string }>()
const emit = defineEmits(['update:content'])

const editableRef = ref<HTMLElement | null>(null)
const rawText = ref(props.content)
const highlights = ref<Highlight[]>([])
const activeHighlight = ref<Highlight | null>(null)

watch(rawText, (val) => {
  emit('update:content', val)
})

watch(rawText, (val) => analyze(val))

watch(suggestions, val => highlights.value = val)

const highlightColor = (type: HighlightType) => ({
  tone: 'text-warning',
  style: 'text-info',
  grammar: 'text-error',
  emotion: 'text-success'
}[type] || '')

const generateHighlightedHTML = (): string => {
  let html = rawText.value
  for (const h of [...highlights.value].reverse()) {
    html = html.slice(0, h.start) +
      `<span class="cursor-pointer underline decoration-dotted ${highlightColor(h.type)}" data-start="${h.start}" data-end="${h.end}" title="${h.message}">${html.slice(h.start, h.end)}</span>` +
      html.slice(h.end)
  }
  return html
}
/*
const analyze = useDebounceFn(() => {
  // Simulate analysis
  highlights.value = [
    {
      start: 5,
      end: 15,
      text: 'trajectory',
      type: 'style',
      message: 'Consider a simpler word.',
      suggestion: 'path'
    }
  ]
}, 600)
*/
const onContentInput = (e: Event) => {
  rawText.value = (e.target as HTMLElement).innerText
  analyze()
}

const onHighlightClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const start = parseInt(target.dataset.start!)
  const end = parseInt(target.dataset.end!)
  const h = highlights.value.find(h => h.start === start && h.end === end)
  if (h) activeHighlight.value = h
}

const applySuggestion = () => {
  const h = activeHighlight.value
  if (!h) return
  rawText.value =
    rawText.value.slice(0, h.start) +
    h.suggestion +
    rawText.value.slice(h.end)
  activeHighlight.value = null
  analyze()
}
</script>

<template>
  <div class="card bg-base-100 border border-base-200">
    <div class="card-title px-6 pt-4 pb-2 text-lg font-semibold">
      {{ title }}
    </div>
    <div class="px-6 pb-4">
      <div
        class="prose max-w-none min-h-[200px] leading-relaxed"
        ref="editableRef"
        contenteditable
        :innerHTML="generateHighlightedHTML()"
        @input="onContentInput"
        @click="onHighlightClick"
      ></div>
    </div>

    <!-- Suggestion Box -->
    <div v-if="activeHighlight" class="px-6 pb-4">
      <div class="p-3 bg-base-200 rounded-lg border border-base-300 shadow">
        <div class="text-sm mb-2">{{ activeHighlight.message }}</div>
        <div class="mb-2 italic">Suggested: <code>{{ activeHighlight.suggestion }}</code></div>
        <button class="btn btn-sm btn-primary" @click="applySuggestion">Apply</button>
      </div>
    </div>
  </div>
</template>