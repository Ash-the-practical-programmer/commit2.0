import { GoogleGenAI } from '@google/genai'

export default defineEventHandler(async (event) => {
  const { text }: { text: string } = await readBody(event)

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  const resp = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Edit suggestions for the following content. Return JSON array of { start, end, type, message, suggestion }.\n\n${text}`
  })

  const suggestions = JSON.parse(resp.text())
  return { suggestions: json }
})