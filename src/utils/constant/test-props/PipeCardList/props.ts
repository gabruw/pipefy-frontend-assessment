//#region Imports

import { Organizations } from 'models/organization';
import { GET_PIPES_BY_ORGANIZATION } from 'services/pipe/query';
import pipe from 'utils/constant/test-props/PipeCard/props';

//#endregion

const getPipesByOrganization: Organizations = {
    organization: {
        pipes: [pipe]
    }
};

export const APOLLO_MOCKS = [
    {
        request: {
            query: GET_PIPES_BY_ORGANIZATION,
            variables: {
                id: pipe.id
            }
        },
        result: {
            data: getPipesByOrganization
        }
    }
];
