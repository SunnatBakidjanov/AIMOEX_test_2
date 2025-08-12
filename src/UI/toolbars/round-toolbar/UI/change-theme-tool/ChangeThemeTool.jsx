import { ChangeThemeBtn } from '../../../../buttons/change-theme-btn/ChangeThemeBtn';
import { roundToolbarStyles } from '../../scripts/roundToolbarStyles';
import { GiMoonBats } from 'react-icons/gi';
import { CgSun } from 'react-icons/cg';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

export const ChangeThemeTool = () => {
    const { toolsClassname, toolsImgClassname } = roundToolbarStyles();
    const theme = useSelector(state => state.theme.currentTheme);

    return (
        <ChangeThemeBtn className={classNames(toolsClassname, 'relative overflow-hidden')}>
            <CgSun className={classNames(toolsImgClassname, 'absolute', theme === 'light' ? 'left-[50%] translate-x-[-50%] delay-200' : 'left-[100%]')} />
            <GiMoonBats className={classNames(toolsImgClassname, 'absolute', theme === 'dark' ? 'right-[50%] translate-x-[50%] delay-200' : 'right-[100%]')} />
        </ChangeThemeBtn>
    );
};
