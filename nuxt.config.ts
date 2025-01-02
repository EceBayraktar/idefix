// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'bootstrap-vue-next/dist/bootstrap-vue-next.css'
  ],
  build: {
    //transpile: ['bootstrap'],
    transpile: ['bootstrap-vue-next']
  },
  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' },
    { src: '~/plugins/firebase.ts', mode: 'client' }
  ],
})
