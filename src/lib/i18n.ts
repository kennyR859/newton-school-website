import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enCommon from '@/locales/en/common.json';
import enHome from '@/locales/en/home.json';
import enAbout from '@/locales/en/about.json';
import enCurriculum from '@/locales/en/curriculum.json';
import enContact from '@/locales/en/contact.json';
import enFaq from '@/locales/en/faq.json';
import enPolicy from '@/locales/en/policy.json';

// Korean translations
import koCommon from '@/locales/ko/common.json';
import koHome from '@/locales/ko/home.json';
import koAbout from '@/locales/ko/about.json';
import koCurriculum from '@/locales/ko/curriculum.json';
import koContact from '@/locales/ko/contact.json';
import koFaq from '@/locales/ko/faq.json';
import koPolicy from '@/locales/ko/policy.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        curriculum: enCurriculum,
        contact: enContact,
        faq: enFaq,
        policy: enPolicy,
      },
      ko: {
        common: koCommon,
        home: koHome,
        about: koAbout,
        curriculum: koCurriculum,
        contact: koContact,
        faq: koFaq,
        policy: koPolicy,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'curriculum', 'contact', 'faq', 'policy'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'newton-language',
    },
  });

// Update HTML lang attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  // Also set dir attribute for potential RTL support
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

// Set initial lang attribute
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || 'en';
}

export default i18n;
