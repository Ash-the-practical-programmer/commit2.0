<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  htmlAttrs: {
    'data-theme': 'nord',
    lang: 'en',
  },
  title: 'Commit - College Essay Assistant',
  meta: [
  {
    name: 'description', content: 'AI-powered college essay writing assistant'
  },
  { 
    name: 'theme-color', content: '#4f46e5'
  }
  ],
})
</script>