//#region Imports

import { GET_PIPE_BY_ID } from 'services/pipe/query';
import { FETCH_PIPE_MOCK, PIPE_MOCK } from './mocks';

//#endregion

export const getPipeByIdMock = [
    {
        request: {
            query: GET_PIPE_BY_ID,
            variables: {
                id: PIPE_MOCK.id
            }
        },
        result: {
            data: {
                pipe: FETCH_PIPE_MOCK
            }
        }
    }
];
