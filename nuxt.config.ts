// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['swiper/css'],
  build: {
    transpile: ['swiper'],
  },
  i18n: {
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        dir: 'ltr',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json',
        dir: 'ltr',
      },
    ],
    vueI18n: {
    },
  },
  typescript: { strict: true },
})
