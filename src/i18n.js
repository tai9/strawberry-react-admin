import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translationEN.json';
import translationVN from './locales/vn/translationVN.json';
import translationCN from './locales/cn/translationCN.json';
import LangugeDetector from 'i18next-browser-languagedetector';

// the translation
const resources = {
    en: {
        translation: translationEN
    },
    cn: {
        translation: translationCN
    },
    vn: {
        translation: translationVN
    }
};

i18n.use(LangugeDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',

        debug: true,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
