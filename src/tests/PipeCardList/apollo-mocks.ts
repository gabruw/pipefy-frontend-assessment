//#region Imports

import { GET_PIPES_BY_ORGANIZATION_ID } from 'services/organization/query';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';
import { ORGANIZATIONS_MOCK } from './mocks';

//#endregion

export const getPipesByOrganizationIdMock = [
    {
        request: {
            query: GET_PIPES_BY_ORGANIZATION_ID,
            variables: {
                id: PIPE_MOCK.id
            }
        },
        result: {
            data: ORGANIZATIONS_MOCK
        }
    }
];
