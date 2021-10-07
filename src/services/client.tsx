//#region Imports

import { ApolloClient, InMemoryCache } from '@apollo/client';

//#endregion

const client = new ApolloClient({
    uri: process.env.REACT_APP_PIPEFY_API_URL || '',
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ''}`
    }
});

export default client;
