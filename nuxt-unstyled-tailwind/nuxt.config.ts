import * as path from "path";


// @ts-ignore
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@primevue/nuxt-module'
  ],
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/base.css'],

  postcss: {
      plugins: {
          'postcss-import': {},
          tailwindcss: {},
          autoprefixer: {}
      }
  },

  primevue: {
      options: { theme: 'none' },
  },

  compatibilityDate: '2025-02-23',

  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru.js'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js'
      },
      {
        code: 'kz',
        iso: 'kk-KZ',
        name: 'Қазақша',
        file: 'kz.js'
      },
      {
        code: 'ua',
        iso: 'uk-UA',
        name: 'Українська',
        file: 'ua.js'
      }
    ],
    defaultLocale: 'ru',
    strategy: 'prefix',
    langDir: 'lang/i18n',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark'
          }
        }
      }
    }
  },

  plugins: [
    { src: '~/plugins/lottie.ts', mode: 'client' }
  ],

  build: {
    transpile: ['lottie-web-vue', '@vue/runtime-core']
  },

  experimental: {
    appManifest: true
  }
});