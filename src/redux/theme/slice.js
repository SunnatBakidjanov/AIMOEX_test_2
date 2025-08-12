import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTheme: localStorage.getItem('theme') || 'light',
    currentColor: localStorage.getItem('color') || '#FF6B6B',
};

const setThemeAttribute = (attr, value) => {
    document.documentElement.setAttribute(attr, value);
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state) {
            state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.currentTheme);
            setThemeAttribute('data-theme', state.currentTheme);
        },
        setTheme(state) {
            const now = Date.now();
            const lastUpdateStr = localStorage.getItem('theme_last_update');
            const lastUpdate = lastUpdateStr ? parseInt(lastUpdateStr) : 0;
            const lifetime = 60 * 60 * 1000;
            localStorage.setItem('theme_last_update', now.toString());

            const lifeTimePassed = now - lastUpdate > lifetime;

            if (lifeTimePassed) {
                const hours = new Date().getHours();
                const nextTheme = hours >= 7 && hours < 19 ? 'light' : 'dark';

                localStorage.setItem('theme', nextTheme);
                document.documentElement.setAttribute('data-theme', nextTheme);

                state.currentTheme = nextTheme;
            } else {
                const savedTheme = localStorage.getItem('theme');

                if (savedTheme === 'light' || savedTheme === 'dark') {
                    state.currentTheme = savedTheme;
                    setThemeAttribute('data-theme', savedTheme);
                } else {
                    state.currentTheme = 'light';
                    setThemeAttribute('data-theme', 'light');
                }
            }
        },
        setRandomColor(state) {
            const colors = [
                '#FF6B6B', // тёплый красный
                '#FF8E3C', // оранжевый
                '#4D96FF', // ярко-синий
                '#9D4EDD', // фиолетовый
                '#FF6F91', // розовый
                '#F9844A', // тыквенно-оранжевый
            ];

            const now = Date.now();
            const savedColor = localStorage.getItem('color');
            const savedTime = localStorage.getItem('colorTimestamp');
            const hour = 60 * 60 * 1000;

            if (savedColor && savedTime && now - Number(savedTime) < hour) {
                state.currentColor = savedColor;
            } else {
                const newColor = colors[Math.floor(Math.random() * colors.length)];
                localStorage.setItem('color', newColor);
                localStorage.setItem('colorTimestamp', String(now));
                state.currentColor = newColor;
            }
        },
    },
});

export const { changeTheme, setTheme, setRandomColor } = themeSlice.actions;
export default themeSlice;
