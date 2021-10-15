//#region Imports

import { gql } from '@apollo/client';

//#endregion

const GET_PIPES_BY_ORGANIZATION_ID = gql`
    query GetPipesByOrganizationId($id: ID!) {
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

export { GET_PIPES_BY_ORGANIZATION_ID };
