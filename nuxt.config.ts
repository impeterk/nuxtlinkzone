// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // authJs: {
  //      verifyClientOnEveryRequest: true,
  //      guestRedirectTo: "/", // where to redirect if the user is not authenticated
  //      authenticatedRedirectTo: "/", // where to redirect if the user is authenticated
  //      baseUrl: "http://localhost:3000/" // should be something like https://www.my-app.com
  //    },
  modules: ["@nuxt/fonts", '@nuxt/image','@nuxt/ui', 'nuxt-icon', '@hebilicious/authjs-nuxt'],
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
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: "http://localhost:3000",
        verifyClientOnEveryRequest: true
      }
    }
  },
  app: {
    
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/logo.png", sizes:"32x32"}]
    }
  },
  alias: {
    cookie: "cookie"
  }
})