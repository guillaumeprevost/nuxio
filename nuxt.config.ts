import { defineNuxtConfig } from 'nuxt/config'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  typescript: {
    strict: true
  },

  /* Tailwind */
  tailwindcss: {
    cssPath: '~~/assets/tailwind.css',
    configPath: '~~/tailwind.config.js',
    //   exposeConfig: false,
    //   config: {}
  },

  /*
   ** Global CSS
   */
   css: [
    '@/assets/styles/alldevices.sass',
  ],
  styleResources: { // use underscore "_" & also file extension ".scss"
    sass: [
      './assets/styles/colors.sass',
      './assets/styles/mixins/scrollbars.sass',
    ]
  },

  buildModules: [
    '@pinia/nuxt', // https://pinia.vuejs.org/
    '@vueuse/nuxt', // https://vueuse.org/
    '@nuxtjs/google-fonts' // https://google-fonts.nuxtjs.org
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ['@heroicons/vue', '@headlessui/vue'],
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiClientId: process.env.API_CLIENT_ID,
      apiClientSecret: process.env.API_CLIENT_SECRET,
    }
  },

  vite: {
    plugins: [
      VueI18nPlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ],
        runtimeOnly: false,
      })
    ]
  },

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Lexend: [400, 500],
    },
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    download: true
  },

  alias: {
    'date-fns/locale$': require.resolve('./date-fns-locales.js'),
  },

  meta: {
    title: 'Agence de dev Nuxio : votre site, e-commerce ou SaaS sur-mesure',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxio web agency website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      class: "h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
    }
  },
})
