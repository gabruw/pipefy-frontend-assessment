//#region Imports

import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slicers/loader';
import snackbarReducer from './slicers/snackbar';

//#endregion

const store = configureStore({
    reducer: {
        loader: loaderReducer,
        snackbar: snackbarReducer
    }
});

export type SystemDispatch = typeof store.dispatch;

export type SystemState = ReturnType<typeof store.getState>;

export default store;
