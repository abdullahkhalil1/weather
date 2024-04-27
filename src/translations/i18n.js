import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import weatherEN from './weather/en.json'
import weatherAR from './weather/ar.json'

const selectedLang = sessionStorage.getItem('lang')

i18n.use(initReactI18next).init({
  resources: {
    en: {
      weather: weatherEN,
    },
    ar: {
      weather: weatherAR,
    },
  },
  lng: selectedLang,
  fallbackLng: 'en',
})

export default i18n
