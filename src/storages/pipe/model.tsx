//#region Imports

import Pipe from 'models/pipe';
import { MutableRefObject } from 'react';

//#endregion

export interface PipeInitialState {
    pipe?: Pipe | null;
    pipes: Array<Pipe>;
}

interface PipeInitialContext {
    state: PipeInitialState;
    setPipe: (pipe?: Pipe) => void;
    modalRef?: MutableRefObject<any>;
    setPipes: (pipes: Array<Pipe>) => void;
}

export default PipeInitialContext;
