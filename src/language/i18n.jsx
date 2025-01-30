import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, es } from './page'
import i18next from 'i18next'

const resources = {
    en: {
        translation: en
    },
    es: {
        translation: es
    }
};

i18next
    .use(initReactI18next)
    .init({
        lng: "es",
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        },
        resources
    });

export default i18n