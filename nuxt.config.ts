import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
    VIDEO_BASE_URL: process.env.VIDEO_BASE_URL,
  },
});
