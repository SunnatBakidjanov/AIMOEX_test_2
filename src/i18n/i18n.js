import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import userDashboardEn from './locales/en/user-dashboard.json';
import userDashboardRu from './locales/ru/user-dashboard.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        ns: ['userDashboard'],
        resources: {
            en: {
                userDashboard: userDashboardEn,
            },
            ru: {
                userDashboard: userDashboardRu,
            },
        },
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
        },
    });

export default i18n;
