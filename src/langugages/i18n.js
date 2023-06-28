import i18next from 'i18next'
import english from './english.json'
import french from './french.json'
import russian from './russian.json'
import deutsch from './deutsch.json'
import {initReactI18next} from 'react-i18next';



i18next
.use(initReactI18next)
.init({
    compatibilityJSON: 'v3',
    lng: 'eng',
    resources: {
        en: english,
        fr: french,
        ru: russian,
        de: deutsch,
      },
      react: {
        useSuspense: false,
      },

})

export default i18next;