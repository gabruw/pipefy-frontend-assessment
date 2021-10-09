//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Loader from 'models/loader';

//#endregion

const initialState: Loader = {
    isLoading: false
};

const { actions, reducer } = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isLoading = !state.isLoading;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const { toggle, setIsLoading } = actions;

export default reducer;
