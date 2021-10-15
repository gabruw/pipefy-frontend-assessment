//#region Imports

import PipeModal from 'components/PipeModal';
import { FC, useEffect } from 'react';
import usePipeContext from 'storages/pipe/context';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';

//#endregion

const TPipeModal: FC = () => {
    const { modalRef, state, setPipe } = usePipeContext();
    modalRef?.current?.show();

    useEffect(() => {
        if (!state.pipe) {
            setPipe(PIPE_MOCK);
        }
    }, [state, setPipe]);

    return <PipeModal />;
};

export default TPipeModal;
