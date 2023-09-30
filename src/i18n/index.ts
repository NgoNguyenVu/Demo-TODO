import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import 'intl-pluralrules';

import en from './locales/en/translation.json';
import pt from './locales/pt/translation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: en,
    pt: pt,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
