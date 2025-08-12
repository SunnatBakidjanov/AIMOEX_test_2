import { useTranslation } from 'react-i18next';

export const ProfileStats = ({ stats }) => {
    const { t } = useTranslation('userDashboard');

    const styles = {
        innerContainer: 'shadow-[1px_1px_4px_var(--accent-color)] rounded-xl p-4',
        title: 'text-[var(--primary-color)] text-[1.5rem] font-medium transition-colors duration-400 mb-2',
        textProgress: 'flex justify-between text-[1.25rem] text-[var(--primary-color)] mb-1 transition-colors duration-400 px-1',
        progressBar: 'w-full bg-gray-300 rounded-2xl h-2.5',
        progressLine: 'bg-[var(--accent-color)] h-full rounded-xl transition-colors duration-400',
    };

    return (
        <section className="flex justify-center bg-[var(--primary-transparent)] items-center flex-col gap-y-2 rounded-xl transition-color duration-400 px-4 py-5">
            <h2 className="px-2 pb-2 text-[var(--primary-color)] text-[1.75rem] font-medium tracking-[0.3px] w-full text-center transition-colors duration-400">{t('profileStats.title')}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Пройдено тестов */}
                <div className={styles.innerContainer}>
                    <p className={styles.title}>{t('profileStats.testPassed')}</p>

                    <div className={styles.textProgress}>
                        <span>
                            {stats.testsTaken} / {stats.totalTests}
                        </span>
                        <span>{Math.round((stats.testsTaken / stats.totalTests) * 100)}%</span>
                    </div>

                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressLine}
                            style={{
                                width: `${(stats.testsTaken / stats.totalTests) * 100}%`,
                            }}
                        ></div>
                    </div>
                </div>

                {/* Средний балл */}
                <div className={styles.innerContainer}>
                    <p className={styles.title}>{t('profileStats.averageScore')}</p>

                    <div className={styles.textProgress}>
                        <span>{stats.averageScore} / 100</span>
                        <span>{stats.averageScore}%</span>
                    </div>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressLine}
                            style={{
                                width: `${stats.averageScore}%`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
