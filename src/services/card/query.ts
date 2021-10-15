//#region Imports

import { gql } from '@apollo/client';

//#endregion

const GET_CARDS_BY_CARD_ID = gql`
    query GetCardsByCardId($pipe_id: ID!, $first: Int, $after: String) {
        cards(pipe_id: $pipe_id, first: $first, after: $after) {
            edges {
                cursor
                node {
                    pipe {
                        id
                        name
                        color
                        public
                        cards_count
                    }
                }
            }
            pageInfo {
                hasNextPage
            }
        }
    }
`;

export { GET_CARDS_BY_CARD_ID };
