'use client'

import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
    darkMode: boolean;
}

const initialState: DarkModeState = {
    darkMode: localStorage.getItem('darkMode') === 'true' ? true : false,
}

const darkModeSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    },
});

export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer
