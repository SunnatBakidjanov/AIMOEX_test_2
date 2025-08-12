import { roundToolbarStyles } from '../../scripts/roundToolbarStyles';
import { ChangeLangBtn } from '../../../../buttons/change-lang-btn/ChangeLangBtn';
import { IoLanguageSharp } from 'react-icons/io5';

export const ChangeLangTool = ({ isOpen }) => {
    const { toolsClassname, toolsImgClassname } = roundToolbarStyles();

    return (
        <ChangeLangBtn tabIndex={isOpen ? 0 : -1} className={toolsClassname}>
            <IoLanguageSharp className={toolsImgClassname} />
        </ChangeLangBtn>
    );
};
