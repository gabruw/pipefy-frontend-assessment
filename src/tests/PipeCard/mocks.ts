//#region Imports

import Pipe, { FetchPipe } from 'models/pipe';

//#endregion

export const PIPE_MOCK: Pipe = {
    id: '1',
    color: 'red',
    public: true,
    cards_count: 10,
    name: 'Test Card',
    icon: 'test-icon',
    created_at: new Date(),
    description: 'Test description'
};

export const FETCH_PIPE_MOCK: FetchPipe = {
    pipe: PIPE_MOCK
};
