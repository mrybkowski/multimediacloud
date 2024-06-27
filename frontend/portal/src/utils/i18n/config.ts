import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import plTranslation from './pl/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

export const defaultNS = 'translation';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: enTranslation
            },
            pl: {
                translation: plTranslation
            }
        },
        defaultNS,
        interpolation: {
            escapeValue: false
        }
  });
