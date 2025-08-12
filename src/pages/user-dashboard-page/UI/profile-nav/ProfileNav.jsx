import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function ProfileNav() {
    const navigate = useNavigate();
    const { t } = useTranslation('userDashboard');

    const links = [
        { label: t('profileNav.profile'), path: '/profile' },
        { label: t('profileNav.lastTests'), path: '/tests' },
        { label: t('profileNav.results'), path: '/results' },
        { label: t('profileNav.balansTarif'), path: '/tariff' },
        { label: t('profileNav.achievements'), path: '/achievements' },
    ];

    return (
        <section className="bg-[var(--primary-transparent)] px-4 py-3 rounded-xl transition-color duration-400">
            <h2 className="absolute w-px h-px p-0 m-[-1px] overflow-hidden border-0 whitespace-nowrap clip-[rect(0,0,0,0)]">{t('profileNav.title')}</h2>
            <nav className="flex gap-2 flex-wrap">
                {links.map(link => (
                    <button
                        key={link.path}
                        onClick={() => navigate(link.path)}
                        className="px-4 py-2 rounded-lg text-[1rem] font-medium tracking-[0.2px] text-[var(--primary-color)] hover:text-[var(--same-white-color)] transition-all duration-400 cursor-pointer hover:bg-[var(--accent-color)]"
                    >
                        {link.label}
                    </button>
                ))}
            </nav>
        </section>
    );
}
