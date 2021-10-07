//#region Imports

import { gql } from '@apollo/client';

//#endregion

const GET_PIPES_BY_ORGANIZATION = gql`
    query GetPipesByOrganizartion($id: ID!) {
        organization(id: $id) {
            pipes {
                id
                name
                color
                public
                cards_count
            }
        }
    }
`;

const GET_PIPE_BY_ID = gql`
    query GetPipeById($id: ID!) {
        pipe(id: $id) {
            id
            name
            color
            public
            created_at
            cards_count
            description
        }
    }
`;

export { GET_PIPE_BY_ID, GET_PIPES_BY_ORGANIZATION };
