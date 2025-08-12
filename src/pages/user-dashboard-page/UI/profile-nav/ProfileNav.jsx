import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function ProfileNav() {
    const navigate = useNavigate();
    const { t } = useTranslation('userDashboard');

    const links = [
        { label: t('profileNav.profile'), path: '/user/profile' },
        { label: t('profileNav.lastTests'), path: '/user/tests' },
        { label: t('profileNav.results'), path: '/user/results' },
        { label: t('profileNav.balansTarif'), path: '/user/tariff' },
        { label: t('profileNav.achievements'), path: '/user/achievements' },
    ];

    return (
        <section
            className="
                bg-[var(--primary-transparent)] rounded-xl transition-color duration-400
                px-4 py-4 sm:py-2
            "
        >
            <h2 className="absolute w-px h-px p-0 m-[-1px] overflow-hidden border-0 whitespace-nowrap clip-[rect(0,0,0,0)]">{t('profileNav.title')}</h2>
            <nav
                className="
                    flex flex-wrap
                    gap-2
                    justify-center md:justify-start
                "
            >
                {links.map(link => (
                    <button
                        key={link.path}
                        onClick={() => navigate(link.path)}
                        className="
                            rounded-lg font-medium tracking-[0.2px] text-[var(--primary-color)] hover:text-[var(--same-white-color)] transition-all duration-400 cursor-pointer hover:bg-[var(--accent-color)]
                            border border-[var(--accent-color)] sm:border-none
                            w-full sm:w-auto
                            px-4 py-2
                        "
                    >
                        {link.label}
                    </button>
                ))}
            </nav>
        </section>
    );
}
