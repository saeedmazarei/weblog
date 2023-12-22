import { DarkModeState } from '@/app/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: DarkModeState = {
    value: false,
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state: DarkModeState) => {
            state.value = !state.value
        }
    },
});

export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer;
