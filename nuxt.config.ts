import { defineNuxtConfig } from 'nuxt/config'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

const metaTitle = 'Agence de dev Nuxio : votre site, e-commerce ou SaaS sur-mesure';
const metaDescription = 'Agence de développement Nuxio : céation de sites web, e-commerce, SaaS sur-mesure, conception MVP, audit et refontes de sites. Agence de dev à Toulouse.'

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
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  // image: {
  //   dir: 'public/images'
  // },

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

  // runtimeConfig: {
  //   public: {
  //     apiBaseUrl: process.env.API_BASE_URL,
  //     apiClientId: process.env.API_CLIENT_ID,
  //     apiClientSecret: process.env.API_CLIENT_SECRET,
  //   }
  // },

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

  app: {
    head: {
      title: metaTitle,
      htmlAttrs: {
        lang: "fr",
        class: "h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      },
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: metaDescription },

        { name: 'og:site_name', property: 'og:site_name', content: 'Agence Nuxio' },
        { name: 'og:locale', property: 'og:locale', content: 'fr-FR' },
        { name: 'og:type', property: 'og:type', content: 'website' },

        { name: 'og:title', property: 'og:title', content: metaTitle },
        { name: 'og:description', property: 'og:description', content: metaDescription },
        { name: 'og:url', property: 'og:url', content: 'https://nuxio.dev' },
        { name: 'og:image', property: 'og:image', content: 'https://nuxio.dev/images/agence-nuxio.jpg' },
        { name: 'og:image:width', property: 'og:image:width', content: '1200' },
        { name: 'og:image:height', property: 'og:image:height', content: '630' },

        { name: 'twitter:card', property: 'twitter:card', content: 'summary' },
        // { name: 'twitter:site', property: 'twitter:site', content: '' },
        { name: 'twitter:title', property: 'twitter:title', content: metaTitle},
        { name: 'twitter:description', property: 'twitter:description', content: metaDescription },
        { name: 'twitter:url', property: 'twitter:url', content: 'https://nuxio.dev' },
        { name: 'twitter:image', property: 'twitter:image',content: 'https://nuxio.dev/images/agence-nuxio.jpg' },
        { name: 'twitter:image:width', property: 'twitter:image:width', content: '1200' },
        { name: 'twitter:image:height', property: 'twitter:image:height', content: '630' },
      ],
    }
  },
})
