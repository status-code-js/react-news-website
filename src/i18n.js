import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {posts as esPosts} from './data/es/newsData.js';
import {posts as enPosts} from './data/en/newsData.js';
import {posts as ruPosts} from './data/ru/newsData.js';



i18n.use(initReactI18next).init({
    resources: {
        en: { translation: { posts: enPosts } },
        es: { translation: { posts: esPosts } },
        ru: { translation: { posts: ruPosts } },
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});


export default i18n;