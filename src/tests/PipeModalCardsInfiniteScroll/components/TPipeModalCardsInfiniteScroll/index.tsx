//#region Imports

import PipeModalCardsInfiniteScroll from 'containers/PipeModalCardsInfiniteScroll';
import Pipe from 'models/pipe';
import { FC, useEffect } from 'react';
import usePipeContext from 'storages/pipe/context';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';

//#endregion

const TPipeModalCardsInfiniteScroll: FC = () => {
    const { setPipe, setPipes } = usePipeContext();

    useEffect(() => {
        const array: Array<Pipe> = [];

        for (let i = 0; i <= 30; i++) {
            array.push(PIPE_MOCK);
        }

        setPipes(array);
        setPipe(PIPE_MOCK);
    }, [setPipe, setPipes]);

    return <PipeModalCardsInfiniteScroll />;
};

export default TPipeModalCardsInfiniteScroll;
