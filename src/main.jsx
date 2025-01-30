import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/assets/css/style.css'
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import Home from './app/page.jsx';

import './language/i18n'

/*SE SUBE MODIFICACION A DEV OTRAVEZ */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
