// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      MAPS_API_KEY: process.env.NUXT_PUBLIC_MAPS_API_KEY,
    },
  },
})
