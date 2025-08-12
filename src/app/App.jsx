import { Provider } from 'react-redux';
import { AppRoutes } from '../routes/AppRoutes';
import '../styles/index.css';

import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { ThemeWrapper } from '../components/theme/ThemeWrapper';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeWrapper>
                    <AppRoutes />
                </ThemeWrapper>
            </BrowserRouter>
        </Provider>
    );
};
