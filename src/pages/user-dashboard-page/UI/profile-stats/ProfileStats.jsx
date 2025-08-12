import { useTranslation } from 'react-i18next';
import { userDashBoardStyles } from '../../styles/userDashBoardStyles';

export const ProfileStats = ({ stats }) => {
    const { t } = useTranslation('userDashboard');
    const { mainContainer, titleSection } = userDashBoardStyles();

    const styles = {
        innerContainer: `
            shadow-[1px_1px_4px_var(--accent-color)] rounded-xl transition-all duration-400
            px-3 sm:px-4
            py-4 sm:py-5
        `,
        title: `
            text-[var(--primary-color)] font-medium transition-colors duration-400
            text-xl sm:text-2xl
            mb-4 sm:mb-5
        `,
        textProgress: `
            flex justify-between text-[var(--primary-color)] transition-colors duration-400
            px-0.5 sm:px-1
            mb-1.5
            text-lg sm:text-xl
        `,
        progressBar: `
            w-full bg-gray-300 rounded-2xl
            h-2 sm:h-2.5
        `,
        progressLine: 'bg-[var(--accent-color)] h-full rounded-xl transition-colors duration-400',
    };

    return (
        <section className={mainContainer}>
            <h2 className={titleSection}>{t('profileStats.title')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
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
