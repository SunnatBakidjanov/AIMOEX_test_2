import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './index.module.css';

export const GradientBackground = () => {
    const theme = useSelector(state => state.theme.currentTheme);

    const rootClassName = 'fixed z-[var(--bg-z-index)] rounded-full inset-0 blur-[350px] overflow-hidden';

    return (
        <>
            <div className={classNames(rootClassName, styles.darkTheme, theme === 'dark' ? 'opacity-100' : 'opacity-0')}></div>

            <div className={classNames(rootClassName, styles.lightTheme, theme === 'light' ? 'opacity-100' : 'opacity-0')}></div>
        </>
    );
};
