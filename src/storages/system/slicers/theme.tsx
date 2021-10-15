//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Theme, { ThemeSchema } from 'models/theme';

//#endregion

const initialState: Theme = {
    schema: 'light'
};

const { actions, reducer } = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state) => {
            state.schema = state.schema === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action: PayloadAction<ThemeSchema>) => {
            state.schema = action.payload;
        }
    }
});

export const { toggle, setTheme } = actions;

export default reducer;
