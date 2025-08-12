import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRandomColor, setTheme } from '../../redux/theme/slice';

export const ThemeWrapper = ({ children }) => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setTheme());
        dispatch(setRandomColor());
    }, [dispatch]);

    return <>{children}</>;
};
