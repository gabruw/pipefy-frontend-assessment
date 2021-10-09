//#region Imports

import { ApolloProvider } from '@apollo/client';
import 'assets/styles/global.css';
import Loader from 'components/Loader';
import Snackbar from 'components/Snackbar';
import React, { FC } from 'react';
import Router from 'routes/Router';
import useClient from 'services/useClient';

//#endregion

const App: FC = () => {
    const client = useClient();

    return (
        <ApolloProvider client={client}>
            <Router />

            <Loader />
            <Snackbar />
        </ApolloProvider>
    );
};

export default App;
