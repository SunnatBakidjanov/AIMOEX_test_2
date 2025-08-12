import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useDisabled } from '../../../hooks/useDisabled';
import { changeTheme } from '../../../redux/theme/slice';

export const ChangeThemeBtn = ({ text, children, className, tabIndex = 0 }) => {
    const dispatch = useDispatch();
    const { isDisabled, setDisabled } = useDisabled();

    return (
        <button
            type="button"
            aria-label="changeThemeBtn"
            tabIndex={tabIndex}
            className={classNames(className)}
            onClick={() => {
                setDisabled();
                dispatch(changeTheme());
            }}
            disabled={isDisabled}
        >
            {text}
            {children}
        </button>
    );
};
