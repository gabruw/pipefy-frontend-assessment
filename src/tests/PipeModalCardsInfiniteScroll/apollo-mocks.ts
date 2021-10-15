//#region Imports

import { GET_CARDS_BY_CARD_ID } from 'services/card/query';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';
import { FETCH_CARDS_MOCK } from './mocks';

//#endregion

export const getCardsByCardIdMock = [
    {
        request: {
            query: GET_CARDS_BY_CARD_ID,
            variables: {
                first: 4,
                pipe_id: PIPE_MOCK.id,
                after: FETCH_CARDS_MOCK.cards.edges[0].cursor || null
            }
        },
        result: {
            data: FETCH_CARDS_MOCK
        }
    }
];
