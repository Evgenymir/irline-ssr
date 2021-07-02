import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {
  fallbackLng: 'en',
  load: 'languageOnly',
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  saveMissing: true,
  debug: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format, lng) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  react: {
    useSuspense: false,
    wait: true,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector);

if (!i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;
