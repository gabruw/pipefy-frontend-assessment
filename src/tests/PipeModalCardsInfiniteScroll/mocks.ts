//#region Imports

import { FetchCards } from 'models/card';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';

//#endregion

export const FETCH_CARDS_MOCK: FetchCards = {
    cards: {
        edges: [
            {
                cursor: 'QEFQWEFQ673643FFG2GQEBCIQG73',
                node: {
                    pipe: PIPE_MOCK
                }
            }
        ]
    },
    pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false
    }
};
