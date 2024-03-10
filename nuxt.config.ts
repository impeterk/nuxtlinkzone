// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", '@nuxt/image','@nuxt/ui', 'nuxt-icon'] ,
  colorMode: {
    preference: 'light'
  },
  fonts: {
    families: [
      {
        name: 'Inter', provider: 'google'
      },
      {
        name: 'Fira+Code', provider: 'google'
      }
    ]
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/logo.png", sizes:"32x32"}]
    }
  }
})