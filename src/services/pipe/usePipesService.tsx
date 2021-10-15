//#region Imports

import { ApolloQueryResult, useApolloClient } from '@apollo/client';
import { FetchPipe } from 'models/pipe';
import { useCallback } from 'react';
import { useLoaderDispatch } from 'storages/system/hooks/loader';
import { GET_PIPE_BY_ID } from './query';

//#endregion

interface PipesServiceProps {
    getPipeById: (pipeId: string) => Promise<ApolloQueryResult<FetchPipe>>;
}

const usePipesService = (): PipesServiceProps => {
    const client = useApolloClient();
    const { toggleDispatch } = useLoaderDispatch();

    const getPipeById = useCallback(
        async (pipeId): Promise<ApolloQueryResult<FetchPipe>> => {
            toggleDispatch();

            const response = await client
                .query<FetchPipe>({
                    query: GET_PIPE_BY_ID,
                    variables: {
                        id: pipeId
                    }
                })
                .finally(() => toggleDispatch());

            return response;
        },
        [toggleDispatch, client]
    );

    return {
        getPipeById
    };
};

export default usePipesService;
