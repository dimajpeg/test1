import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import uk from './locales/uk.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        ru: {
            translation: ru,
        },
        uk: {
            translation: uk,
        },
    },
    lng: 'ru', // начальный язык
    fallbackLng: 'en', // если перевод не найден — использовать английский
    interpolation: {
        escapeValue: false,
    },
});
