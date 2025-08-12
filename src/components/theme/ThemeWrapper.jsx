import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/slice';

export const ThemeWrapper = ({ children }) => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setTheme());
    }, [dispatch]);

    return <>{children}</>;
};
