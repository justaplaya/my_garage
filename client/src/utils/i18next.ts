import i18next from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../../public/locales/en/translation.json';
import ruTranslation from '../../public/locales/ru/translation.json';

const resources = { en: { translation: enTranslation }, ru: { translation: ruTranslation } };

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru', // дефолтный язык
    supportedLngs: ['ru', 'en'], // поддерживаемые языки
    debug: false,
    detection: { order: ['localStorage', 'cookie'], caches: ['localStorage', 'cookie'] },
    interpolation: { escapeValue: false },
    react: {
      useSuspense: true,
    },
    returnNull: false,
  });
export default i18next;
