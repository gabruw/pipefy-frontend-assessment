//#region Imports

import { ThemeSchema } from 'models/theme';
import { useDispatch } from 'react-redux';
import { setTheme, toggle } from '../slicers/theme';
import { useSystemSelector } from './hooks';

//#endregion

export const useThemeSelector = () => useSystemSelector((state) => state.theme);

export const useThemeDispatch = () => {
    const dispatch = useDispatch();

    const toggleDispatch = () => dispatch(toggle());
    const setThemeDispatch = (payload: ThemeSchema) => dispatch(setTheme(payload));

    return {
        toggleDispatch,
        setThemeDispatch
    };
};
