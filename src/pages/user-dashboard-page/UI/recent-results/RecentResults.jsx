import { useTranslation } from 'react-i18next';
import { userDashBoardStyles } from '../../styles/userDashBoardStyles';

export const RecentResults = ({ recentResults }) => {
    const { mainContainer, titleSection } = userDashBoardStyles();
    const { t } = useTranslation('userDashboard');

    return (
        <section className={mainContainer}>
            <h2 className={titleSection}>{t('recentResults.title')}</h2>

            <div className="space-y-3">
                {recentResults.map(result => (
                    <div key={result.id} className="flex justify-between items-center border-b border-[var(--accent-color)] pb-2 last:border-none transition-all duration-400">
                        <div>
                            <p className="text-xl lg:text-2xl text-[var(--primary-color)] font-medium transition-colors duration-400">{result.testName}</p>
                            <p className="text-sm lg:text-base text-gray-500">{new Date(result.date).toLocaleDateString('ru-RU')}</p>
                        </div>
                        <div className={`text-xl lg:text-2xl font-bold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>{result.score}%</div>
                    </div>
                ))}
            </div>
        </section>
    );
};
