// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      MAPS_API_KEY: process.env.NUXT_PUBLIC_MAPS_API_KEY,
    },
  },
  build: { transpile: ['vuetify'] },
  vite: {
    vue: { template: { transformAssetUrls } },
    plugins: [vuetify({ autoImport: true })],
  },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  ssr: true,
})
