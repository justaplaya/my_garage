import i18next from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en'],
    debug: false,
    detection: { order: ['localStorage', 'cookie'], caches: ['localStorage', 'cookie'] },
    interpolation: { escapeValue: false },
    react: {
      useSuspense: true,
    },
    returnNull: false,
  });
export default i18next;