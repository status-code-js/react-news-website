import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enData } from './data/en/newsData.js';
import { esData } from './data/es/newsData.js';
import { ruData } from './data/ru/newsData.js';


const resources = {
    es: {
        translation: esData,
    },
    ru: {
        translation: ruData,
    },
    en: {
        translation: enData,
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
});


export default i18n;