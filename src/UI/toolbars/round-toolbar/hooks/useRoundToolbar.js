import { useEffect, useState } from 'react';

export const useRoundToolbar = toolbarRef => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleToolbar = () => setIsOpen(prev => !prev);

    useEffect(() => {
        function handleClickOutside(event) {
            if (toolbarRef.current && !toolbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [toolbarRef]);

    return { isOpen, toggleToolbar };
};
