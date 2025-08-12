import { useNavigate } from 'react-router-dom';

export default function ProfileNav() {
    const navigate = useNavigate();

    const links = [
        { label: 'Профиль', path: '/profile' },
        { label: 'Последние тесты', path: '/tests' },
        { label: 'Результаты', path: '/results' },
        { label: 'Баланс / Мой тариф', path: '/tariff' },
        { label: 'Достижения', path: '/achievements' },
    ];

    return (
        <nav className="flex gap-2 sm:gap-4 flex-wrap bg-white p-3 rounded-xl shadow-sm border border-gray-200">
            {links.map(link => (
                <button key={link.path} onClick={() => navigate(link.path)} className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    {link.label}
                </button>
            ))}
        </nav>
    );
}
