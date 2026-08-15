import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationUZ from "./locales/uz/translation.json";
import translationEN from "./locales/eng/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
    uz: {
        translation: translationUZ,
    },
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "uz",
        fallbackLng: "uz",
        supportedLngs: ["uz", "en", "ru"],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage"],
            caches: ["localStorage"],
            lookupLocalStorage: "i18nextLng",
        },
    });

export default i18n;