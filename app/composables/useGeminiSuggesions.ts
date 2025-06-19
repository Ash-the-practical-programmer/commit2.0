import { useDebounceFn } from '@vueuse/core'

export function useGeminiSuggestions() {
  const suggestions = ref([])
  const request = useDebounceFn(async (text: string) => {
    const { data } = await useFetch('/api/analyze')
    .post({ text })
    .json()
    suggestions.value = data.suggestions
  }, 600) 

  return { suggestions, analyze: request }
}