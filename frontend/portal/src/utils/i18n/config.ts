import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import enSEOTranslation from './en/seo.json';
import plTranslation from './pl/translation.json';
import plSEOTranslation from './pl/seo.json';
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
                translation: enTranslation,
                seo: enSEOTranslation
            },
            pl: {
                translation: plTranslation,
                seo: plSEOTranslation
            }
        },
        defaultNS,
        interpolation: {
            escapeValue: false
        }
  });
