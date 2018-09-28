import Vue from 'vue'
import store from '~/store'
import i18next from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
import VueI18Next from '@panter/vue-i18next'
import langEN from '~/lang/en'
import langJA from '~/lang/ja'

Vue.use(VueI18Next)

i18next
  .use(LngDetector)
  .init({
    // debug: true,
    load: 'languageOnly',
    // lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'ja'],
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupCookie: 'locale',
      lookupLocalStorage: 'locale',
      caches: ['cookie', 'localStorage'],
    },
    resources: {
      en: {
        name: 'English',
        translation: langEN
      },
      ja: {
        name: '日本語',
        translation: langJA
      }
    }
  })

const i18n = new VueI18Next(i18next)

export default i18n
