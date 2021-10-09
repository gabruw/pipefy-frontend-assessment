//#region Imports

import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { useSnackbarDispatch } from 'storages/system/hooks/snackbar';

//#endregion

const useClient = (): ApolloClient<NormalizedCacheObject> => {
    const { setSnackbarDispatch } = useSnackbarDispatch();

    const httpLink = new HttpLink({
        uri: process.env.REACT_APP_PIPEFY_API_URL || '',
        headers: {
            authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ''}`
        }
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) => {
                console.group('[Error GraphQL]');
                console.log(`Message: ${message}`);
                console.log(`Location: ${locations}`);
                console.log(`Path: ${path}`);
                console.groupEnd();
            });

            setSnackbarDispatch({ isVisible: true, text: 'Unexpected Error: See the console for more information.' });
        }

        if (networkError) {
            setSnackbarDispatch({ isVisible: true, text: networkError?.message });
        }
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        credentials: 'same-origin',
        link: from([errorLink, httpLink])
    });
};

export default useClient;
