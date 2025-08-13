import { GradientBackground } from '../../UI/backgrounds/gradient-background/GradientBackground';
import { MainContainer } from '../../UI/containers/main-container/MainContainer';
import { PageContainer } from '../../UI/containers/page-container/PageContainer';
import { UserInfoCard } from '../../UI/user/user-info-card/UserInfoCard';
import { user, stats, recentResults } from '../../mocks/mocks';
import ProfileNav from './UI/profile-nav/ProfileNav';
import { ProfileStats } from './UI/profile-stats/ProfileStats';
import { RecentResults } from './UI/recent-results/RecentResults';
import { RoundToolbarUserDashboard } from './UI/round-toolbar/RoundToolbarUserDashboard';
import { Title } from './UI/title/Title';

export const UserDashboardPage = () => {
    return (
        <PageContainer className={'min-h-screen w-full bg-[var(--primary-reverse-color)] transition-colors duration-400'}>
            <MainContainer className={'relative z-[var(--main-content-z-index)]'}>
                <main
                    className="
                        flex flex-col
                        gap-y-2 sm:gap-y-4
                        pt-4 sm:pt-6
                        pb-14
                    "
                >
                    <Title />

                    <UserInfoCard user={user} />

                    <ProfileNav />

                    <ProfileStats stats={stats} />

                    <RecentResults recentResults={recentResults} />
                </main>

                <RoundToolbarUserDashboard />
            </MainContainer>

            <GradientBackground />
        </PageContainer>
    );
};
