//#region Imports

import { useDispatch } from 'react-redux';
import { useSystemSelector } from '../hooks/hooks';
import { setIsLoading, toggle } from '../slicers/loader';

//#endregion

export const useLoaderSelector = () => useSystemSelector((state) => state.loader);

export const useLoaderDispatch = () => {
    const dispatch = useDispatch();

    const toggleDispatch = () => dispatch(toggle());
    const setIsLoadingDispatch = (payload: boolean) => dispatch(setIsLoading(payload));

    return {
        toggleDispatch,
        setIsLoadingDispatch
    };
};
