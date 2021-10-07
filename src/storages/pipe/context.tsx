//#region Imports

import Pipe from 'models/pipe';
import React, { createContext, FC, useCallback, useContext, useRef, useState } from 'react';
import PipeInitialContext, { PipeInitialState } from './model';

//#endregion

const INITIAL_STATE = {
    pipes: [],
    pipe: null
};

const PipeContext = createContext<PipeInitialContext>({} as PipeInitialContext);

export const PipeContextProvider: FC = ({ children }) => {
    const modalRef = useRef<any>(null);
    const [state, setState] = useState<PipeInitialState>(INITIAL_STATE);

    const setPipe = useCallback((pipe?: Pipe): void => setState((prevState) => ({ ...prevState, pipe })), [setState]);

    const setPipes = useCallback(
        (pipes: Array<Pipe>): void => setState((prevState) => ({ ...prevState, pipes })),
        [setState]
    );

    return <PipeContext.Provider value={{ state, modalRef, setPipe, setPipes }}>{children}</PipeContext.Provider>;
};

const usePipeContext = () => ({ ...useContext(PipeContext) });

export default usePipeContext;
