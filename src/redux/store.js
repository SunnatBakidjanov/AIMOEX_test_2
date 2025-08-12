import { combineReducers, configureStore } from '@reduxjs/toolkit';

import themeSlice from './theme/slice';

const rootReducer = combineReducers({
    [themeSlice.name]: themeSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
