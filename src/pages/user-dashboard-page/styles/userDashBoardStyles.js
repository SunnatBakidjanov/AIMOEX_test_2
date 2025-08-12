export const userDashBoardStyles = () => {
    const mainContainer = `
        bg-[var(--primary-transparent)] rounded-xl transition-colors duration-400
        px-4 sm:px-6
        py-4 sm:py-6
    `;

    const titleSection = `
        text-[var(--primary-color)] font-medium border-b-2 border-[var(--accent-color)] transition-colors duration-400
        text-3xl sm:text-4xl
        mb-5 sm:mb-6
        pb-3 sm:pb-2
        leading-tight
    `;

    return { mainContainer, titleSection };
};
