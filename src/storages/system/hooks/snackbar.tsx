//#region Imports

import Snackbar from 'models/snackbar';
import { useDispatch } from 'react-redux';
import { reset, setSnackbar } from '../slicers/snackbar';
import { useSystemSelector } from './hooks';

//#endregion

export const useSnackbarSelector = () => useSystemSelector((state) => state.snackbar);

export const useSnackbarDispatch = () => {
    const dispatch = useDispatch();

    const resetDispatch = () => dispatch(reset());
    const setSnackbarDispatch = (payload: Snackbar) => dispatch(setSnackbar(payload));

    return {
        resetDispatch,
        setSnackbarDispatch
    };
};
