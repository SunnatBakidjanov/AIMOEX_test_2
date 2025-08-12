import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTheme: localStorage.getItem('theme') || 'light',
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
    },
});

export const { changeTheme, setTheme } = themeSlice.actions;
export default themeSlice;
