import { GradientBackground } from '../../UI/backgrounds/gradient-background/GradientBackground';
import { MainContainer } from '../../UI/containers/main-container/MainContainer';
import { PageContainer } from '../../UI/containers/page-container/PageContainer';
import { UserInfoCard } from '../../UI/user/user-info-card/UserInfoCard';
import { user, stats, recentResults } from '../../mocks/mocks';
import ProfileNav from './UI/profile-nav/ProfileNav';
import { ProfileStats } from './UI/profile-stats/ProfileStats';
import { RoundToolbarUserDashboard } from './UI/round-toolbar/RoundToolbarUserDashboard';

export const UserDashboardPage = () => {
    return (
        <PageContainer className={'h-screen w-full bg-[var(--primary-reverse-color)] transition-colors duration-400'}>
            <MainContainer className={'relative z-[var(--main-content-z-index)]'}>
                <main className="flex flex-col gap-y-4 pt-6">
                    <UserInfoCard user={user} />

                    <ProfileNav />

                    <ProfileStats stats={stats} />

                    {/* Последние результаты */}
                    <div className="bg-white rounded-xl shadow p-4">
                        <h2 className="text-lg font-bold mb-4">Последние результаты</h2>
                        <div className="space-y-3">
                            {recentResults.map(result => (
                                <div key={result.id} className="flex justify-between items-center border-b pb-2 last:border-none">
                                    <div>
                                        <p className="font-medium">{result.testName}</p>
                                        <p className="text-xs text-gray-500">{new Date(result.date).toLocaleDateString('ru-RU')}</p>
                                    </div>
                                    <div className={`font-bold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>{result.score}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                <RoundToolbarUserDashboard />
            </MainContainer>

            <GradientBackground />
        </PageContainer>
    );
};
