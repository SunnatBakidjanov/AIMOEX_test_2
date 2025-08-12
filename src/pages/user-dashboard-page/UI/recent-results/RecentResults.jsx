import { userDashBoardStyles } from '../../styles/userDashBoardStyles';

export const RecentResults = ({ recentResults }) => {
    const { mainContainer, titleSection } = userDashBoardStyles();

    return (
        <section className={mainContainer}>
            <h2 className={titleSection}>Последние результаты</h2>

            <div className="space-y-3">
                {recentResults.map(result => (
                    <div key={result.id} className="flex justify-between items-center border-b border-[var(--accent-color)] pb-2 last:border-none">
                        <div>
                            <p className="text-[1.25rem] text-[var(--primary-color)] font-medium transition-colors duration-400">{result.testName}</p>
                            <p className="text-[0.9rem] text-gray-500">{new Date(result.date).toLocaleDateString('ru-RU')}</p>
                        </div>
                        <div className={`text-[1.25rem] font-bold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>{result.score}%</div>
                    </div>
                ))}
            </div>
        </section>
    );
};
