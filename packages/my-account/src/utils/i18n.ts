import i18n, { use } from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "#assets/locales/en/common.json"
import translationIT from "#assets/locales/it/common.json"

const languages = ["it","en"]

const resources = {
  it: {
    translation: translationIT,
  },
  /* en: {
    translation: translationEN,
  }, */
}
// TODO: ALPENITE: Enable english again and find out why the system seems to force english even if italian is default

use(initReactI18next).init({
  resources,
  lng: languages[0],
  fallbackLng: languages,
})

export default i18n
