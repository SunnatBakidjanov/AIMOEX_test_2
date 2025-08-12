import { RoundToolbar } from '../../../../UI/toolbars/round-toolbar/RoundToolbar';
import { ChangeThemeTool } from '../../../../UI/toolbars/round-toolbar/UI/change-theme-tool/ChangeThemeTool';
import { useRef } from 'react';
import { useRoundToolbar } from '../../../../UI/toolbars/round-toolbar/hooks/useRoundToolbar';
import { ChangeLangTool } from '../../../../UI/toolbars/round-toolbar/UI/change-lang-tool/ChangeLangTool';

export const RoundToolbarUserDashboard = () => {
    const toolbarRef = useRef(null);
    const { isOpen, toggleToolbar } = useRoundToolbar(toolbarRef);

    return (
        <RoundToolbar initialDegree={200} radius={60} openDegree={140} openRadius={0} angleStep={60} className={{ toolbar: 'bottom-0 right-0 w-[170px] h-[180px]' }} isOpen={isOpen} toggleToolbar={toggleToolbar} toolbarRef={toolbarRef}>
            <ChangeThemeTool isOpen={isOpen} />
            <ChangeLangTool isOpen={isOpen} />
        </RoundToolbar>
    );
};
