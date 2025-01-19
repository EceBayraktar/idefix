import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'bootstrap-vue-next/dist/bootstrap-vue-next.css',
  ],
  build: {
    transpile: ['bootstrap-vue-next'],
  },
  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' },
    { src: '~/plugins/firebase.ts', mode: 'client' },
  ],
  modules: ['@pinia/nuxt'],
  alias: {
    '@': path.resolve(__dirname, './src'), // `@` alias'ını doğru şekilde ayarlar
  },
});
