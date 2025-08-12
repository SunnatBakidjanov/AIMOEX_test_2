import { Navigate, Route, Routes } from 'react-router-dom';
import { UserDashboardPage } from '../pages/user-dashboard-page/UserDashboardPage';
import { UserProfilePage } from '../pages/user-profile-page/UserProfilePage';
import { UserTestsPage } from '../pages/user-tests-page/UserTestPage';
import { UserResultsPage } from '../pages/user-results-page/UserResultsPage';
import { UserTarifPage } from '../pages/user-tarif-page/UserTarifPage';
import { UserAchievementsPage } from '../pages/user-achievements-page/UserAchievementsPage';

const userRoutes = [
    { path: 'dashboard', element: <UserDashboardPage /> },
    { path: 'tests', element: <UserTestsPage /> },
    { path: 'results', element: <UserResultsPage /> },
    { path: 'profile', element: <UserProfilePage /> },
    { path: 'tariff', element: <UserTarifPage /> },
    { path: 'achievements', element: <UserAchievementsPage /> },
];

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/user/dashboard" replace />} />

            {userRoutes.map(({ path, element }) => (
                <Route key={path} path={`/user/${path}`} element={element} />
            ))}
        </Routes>
    );
};
