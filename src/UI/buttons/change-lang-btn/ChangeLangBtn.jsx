import i18n from '../../../i18n/i18n';

export const ChangeLangBtn = ({ text, children, className, tabIndex = 0 }) => {
    const setLang = () => {
        const lang = i18n.language;
        i18n.changeLanguage(lang === 'ru' ? 'en' : 'ru');
    };

    return (
        <button type="button" aria-label="changeLangBtn" tabIndex={tabIndex} className={className} onClick={setLang}>
            {text}
            {children}
        </button>
    );
};
