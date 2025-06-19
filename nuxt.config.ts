// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./assets/css/main.css"],
  googleFonts: {
    download: true,
    families: {
      Dosis: true,
      Marmelad: true,
      'DM+Sans': true
    }
  }
})