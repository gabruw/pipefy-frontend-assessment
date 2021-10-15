//#region Imports

import { ApolloQueryResult, useApolloClient } from '@apollo/client';
import { FetchCards } from 'models/card';
import { useCallback } from 'react';
import { GET_CARDS_BY_CARD_ID } from './query';

//#endregion

interface PipesServiceProps {
    getCardsByCardId: (pipeId: string | undefined, after: string | null) => Promise<ApolloQueryResult<FetchCards>>;
}

const useCardService = (): PipesServiceProps => {
    const client = useApolloClient();

    const getCardsByCardId = useCallback(
        async (pipeId, after): Promise<ApolloQueryResult<FetchCards>> => {
            const response = await client.query<FetchCards>({
                query: GET_CARDS_BY_CARD_ID,
                variables: {
                    first: 4,
                    after: after,
                    pipe_id: pipeId
                }
            });

            return response;
        },
        [client]
    );

    return {
        getCardsByCardId
    };
};

export default useCardService;
