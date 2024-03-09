// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", '@nuxt/image','@nuxt/ui'] ,
  colorMode: {
    preference: 'light'
  },
  fonts: {
    families: [
      {
        name: 'Inter', provider: 'google'
      }
    ]
  }
})