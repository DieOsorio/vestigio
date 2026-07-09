import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import appEn from './locales/app.en.json'
import appEs from './locales/app.es.json'
import headerEn from './locales/layout/header.en.json'
import headerEs from './locales/layout/header.es.json'
import footerEn from './locales/layout/footer.en.json'
import footerEs from './locales/layout/footer.es.json'
import heroSectionEn from './locales/sections/heroSection.en.json'
import heroSectionEs from './locales/sections/heroSection.es.json'
import aboutSectionEn from './locales/sections/aboutSection.en.json'
import aboutSectionEs from './locales/sections/aboutSection.es.json'
import gallerySectionEn from './locales/sections/gallerySection.en.json'
import gallerySectionEs from './locales/sections/gallerySection.es.json'
import contactSectionEn from './locales/sections/contactSection.en.json'
import contactSectionEs from './locales/sections/contactSection.es.json'
import buttonEn from './locales/ui/button.en.json'
import buttonEs from './locales/ui/button.es.json'
import sectionTitleEn from './locales/ui/sectionTitle.en.json'
import sectionTitleEs from './locales/ui/sectionTitle.es.json'

const resources = {
  en: {
    app: appEn,
    header: headerEn,
    footer: footerEn,
    heroSection: heroSectionEn,
    aboutSection: aboutSectionEn,
    gallerySection: gallerySectionEn,
    contactSection: contactSectionEn,
    button: buttonEn,
    sectionTitle: sectionTitleEn,
  },
  es: {
    app: appEs,
    header: headerEs,
    footer: footerEs,
    heroSection: heroSectionEs,
    aboutSection: aboutSectionEs,
    gallerySection: gallerySectionEs,
    contactSection: contactSectionEs,
    button: buttonEs,
    sectionTitle: sectionTitleEs,
  },
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    defaultNS: 'app',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
