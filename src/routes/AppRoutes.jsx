import { Navigate, Route, Routes } from 'react-router-dom';
import { UserDashboardPage } from '../pages/user-dashboard-page/UserDashboardPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/user-dashboard" replace />} />

            <Route path="/user-dashboard" element={<UserDashboardPage />} />
        </Routes>
    );
};
