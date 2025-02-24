import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ru from './locales/ru.json';
import uk from './locales/uk.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            uk: { translation: uk }
        },
        fallbackLng: 'en',
        lng: localStorage.getItem('lang') || 'en',  // Используем сохранённый язык или 'en'
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
