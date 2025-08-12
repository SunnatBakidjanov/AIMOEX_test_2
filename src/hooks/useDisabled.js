import { useEffect, useRef, useState, useCallback } from 'react';

export const useDisabled = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const timerRef = useRef(null);

    const setDisabled = useCallback((timer = 400) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        setIsDisabled(true);
        timerRef.current = setTimeout(() => {
            setIsDisabled(false);
            timerRef.current = null;
        }, timer);
    }, []);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return { isDisabled, setDisabled };
};
