export const roundToolbarStyles = () => {
    const toolsClassname = 'rounded-full bg-[var(--accent-color)] w-[3rem] h-[3rem] flex items-center justify-center cursor-pointer transition-colors duration-400';

    const toolsImgClassname = 'w-[55%] h-[55%] text-[var(--same-white-color)] transition-all duration-400 cursor-pointer';

    return { toolsClassname, toolsImgClassname };
};
