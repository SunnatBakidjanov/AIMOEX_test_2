import { AppRoutes } from '../routes/AppRoutes';
import '../styles/index.css';

import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};
