import { useTranslation } from 'react-i18next';

export const Title = () => {
    const { t } = useTranslation('userDashboard');

    return (
        <h1
            className="
                bg-[var(--primary-transparent)]
                px-3 py-2 lg:px-4 lg:py-3
                rounded-xl
                text-center font-medium
                text-[var(--primary-color)]
                transition-colors duration-400
                text-xl sm:text-2xl md:text-2xl lg:text-3xl
            "
        >
            {t('title')}
        </h1>
    );
};
