//#region Imports

import { OperationVariables, QueryTuple, useLazyQuery } from '@apollo/client';
import { Organizations } from 'models/organization';
import { FetchPipe } from 'models/pipe';
import { GET_PIPES_BY_ORGANIZATION, GET_PIPE_BY_ID } from './query';

//#endregion

interface PipesServiceProps {
    getPipeById: QueryTuple<FetchPipe, OperationVariables>;
    getPipesByOrganization: QueryTuple<Organizations, OperationVariables>;
}

const usePipesService = (): PipesServiceProps => {
    const getPipeById = useLazyQuery<FetchPipe>(GET_PIPE_BY_ID);

    const getPipesByOrganization = useLazyQuery<Organizations>(GET_PIPES_BY_ORGANIZATION, {
        variables: {
            id: process.env.REACT_APP_ORGANIZATION_ID
        }
    });

    return {
        getPipeById,
        getPipesByOrganization
    };
};

export default usePipesService;
