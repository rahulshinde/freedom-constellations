// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Freedom Constellations'
    },
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    }
  },
  
  tailwindcss :{
    cssPath: '~/assets/css/global.css',
  }
})
