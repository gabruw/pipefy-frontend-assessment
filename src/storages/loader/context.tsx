//#region Imports

import React, { createContext, FC, useCallback, useContext, useState } from 'react';
import LoaderInitialContext, { LoaderInitialState } from './model';

//#endregion

const INITIAL_STATE = {
    isLoading: false
};

const LoaderContext = createContext<LoaderInitialContext>({} as LoaderInitialContext);

export const LoaderContextProvider: FC = ({ children }) => {
    const [state, setState] = useState<LoaderInitialState>(INITIAL_STATE);

    const setIsLoading = useCallback(
        (isLoading: boolean): void => setState((prevState) => ({ ...prevState, isLoading })),
        [setState]
    );

    return <LoaderContext.Provider value={{ state, setIsLoading }}>{children}</LoaderContext.Provider>;
};

const useLoaderContext = () => ({ ...useContext(LoaderContext) });

export default useLoaderContext;
