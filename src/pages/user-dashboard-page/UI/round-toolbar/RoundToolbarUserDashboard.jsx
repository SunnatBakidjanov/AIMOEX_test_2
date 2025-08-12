import { RoundToolbar } from '../../../../UI/toolbars/round-toolbar/RoundToolbar';
import { ChangeThemeTool } from '../../../../UI/toolbars/round-toolbar/UI/change-theme-tool/ChangeThemeTool';

export const RoundToolbarUserDashboard = () => {
    return (
        <RoundToolbar initialDegree={200} radius={60} openDegree={170} openRadius={40} angleStep={60} className={{ toolbar: 'bottom-0 right-0 w-[170px] h-[180px]' }}>
            <ChangeThemeTool />
        </RoundToolbar>
    );
};
