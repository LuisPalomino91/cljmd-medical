import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/assets/css/style.css'
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import Home from './app/page.jsx';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, es } from './language/page.jsx'

const resources = {
  en: {
      translation: en
  },
  es: {
      translation: es
  }
};

i18n.use(initReactI18next).init({
  resources,

  fallbackLng: "es",

  interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

/*SE SUBE MODIFICACION A DEV OTRAVEZ */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
