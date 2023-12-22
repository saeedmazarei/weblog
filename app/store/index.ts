'use client'
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slices/darkModeSlice'

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
