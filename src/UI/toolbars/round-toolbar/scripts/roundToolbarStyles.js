export const roundToolbarStyles = () => {
    const toolsClassname = 'rounded-full bg-[var(--accent-color)] w-[3rem] h-[3rem] flex items-center justify-center cursor-pointer transition-color duration-400 hover:shadow-[0_0_6px_3px_var(--accent-color)]';

    const toolsImgClassname = 'w-[55%] h-[55%] text-[var(--same-white-color)] transition-all duration-400 cursor-pointer';

    return { toolsClassname, toolsImgClassname };
};
