//#region Imports

import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slicers/loader';
import snackbarReducer from './slicers/snackbar';
import themeReducer from './slicers/theme';

//#endregion

const store = configureStore({
    reducer: {
        theme: themeReducer,
        loader: loaderReducer,
        snackbar: snackbarReducer
    }
});

export type SystemDispatch = typeof store.dispatch;

export type SystemState = ReturnType<typeof store.getState>;

export default store;
