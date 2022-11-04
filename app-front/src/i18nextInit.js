import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";

import translationEN from  "./locales/en/translation.json";
import translationHY from  "./locales/hy/translation.json";
import translationRU from  "./locales/ru/translation.json";
import translationFR from  "./locales/fr/translation.json";

i18next
.use(initReactI18next)
.use(i18nBackend)
.init({
    fallbackLng: "en",
    resources: {
        en: {
            translation: translationEN
        },
        hy: {
            translation: translationHY
        },
        ru: {
            translation: translationRU
        },
        fr: {
            translation: translationFR
        }
    }
});
