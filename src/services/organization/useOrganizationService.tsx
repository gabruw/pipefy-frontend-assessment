//#region Imports

import { ApolloQueryResult, useApolloClient } from '@apollo/client';
import { Organizations } from 'models/organization';
import { useCallback } from 'react';
import { useLoaderDispatch } from 'storages/system/hooks/loader';
import { GET_PIPES_BY_ORGANIZATION_ID } from './query';

//#endregion

interface PipesServiceProps {
    getPipesByOrganizationId: () => Promise<ApolloQueryResult<Organizations>>;
}

const useOrganizationService = (): PipesServiceProps => {
    const client = useApolloClient();
    const { toggleDispatch } = useLoaderDispatch();

    const getPipesByOrganizationId = useCallback(async (): Promise<ApolloQueryResult<Organizations>> => {
        toggleDispatch();

        const response = await client
            .query<Organizations>({
                query: GET_PIPES_BY_ORGANIZATION_ID,
                variables: {
                    id: process.env.REACT_APP_ORGANIZATION_ID
                }
            })
            .finally(() => toggleDispatch());

        return response;
    }, [toggleDispatch, client]);

    return {
        getPipesByOrganizationId
    };
};

export default useOrganizationService;
