//#region Imports

import Pipe, { FetchPipe } from 'models/pipe';
import { GET_PIPE_BY_ID } from 'services/pipe/query';

//#endregion

const pipe: Pipe = {
    id: '1',
    color: 'red',
    public: true,
    cards_count: 10,
    name: 'Test Card',
    icon: 'test-icon',
    created_at: new Date(),
    description: 'Test description'
};

const getPipeByIdMock: FetchPipe = {
    pipe
};

export const APOLLO_MOCKS = [
    {
        request: {
            query: GET_PIPE_BY_ID,
            variables: {
                id: pipe.id
            }
        },
        result: {
            data: getPipeByIdMock
        }
    }
];

export default pipe;
