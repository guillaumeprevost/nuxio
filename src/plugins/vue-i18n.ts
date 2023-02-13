import { createI18n } from 'vue-i18n'
import fr from '~/locales/fr.json'
import en from '~/locales/en.json'

// DOC I18N : https://www.i18next.com/translation-function/essentials
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    allowComposition: true,
    globalInjection: true,
    runtimeOnly: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: { 
      'en': en, 
      'fr': fr, 
    }
  });
  vueApp.use(i18n);
})