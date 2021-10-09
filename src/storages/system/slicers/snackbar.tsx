//#region Imports

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Snackbar from 'models/snackbar';

//#endregion

const initialState: Snackbar = {
    text: '',
    isVisible: false
};

const { actions, reducer } = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        reset: (state) => {
            state.text = initialState.text;
            state.isVisible = initialState.isVisible;
        },
        setSnackbar: (state, action: PayloadAction<Snackbar>) => {
            state.text = action.payload.text;
            state.isVisible = action.payload.isVisible;
        }
    }
});

export const { reset, setSnackbar } = actions;

export default reducer;
