// 手动加载多环境
// import { config } from 'dotenv'
// config({ path: `.env.${process.env.NODE_ENV}` })
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ['@nuxthub/core', '@nuxt/eslint'],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      appName: process.env.NUXT_HUB_PROJECT_NAME,
      env: process.env.NUXT_HUB_ENV,
      test: process.env.NUXT_PUBLIC_TEST,
    },
  },
  devServer: {
    port: 1415,
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},
  // Development config
})
