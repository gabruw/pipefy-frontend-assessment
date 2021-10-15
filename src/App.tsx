//#region Imports

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import 'assets/styles/global.css';
import Loader from 'components/Loader';
import Snackbar from 'components/Snackbar';
import useTheme from 'hooks/useTheme';
import React, { FC } from 'react';
import Router from 'routes/Router';
import useClient from 'services/useClient';

//#endregion

const App: FC = () => {
    const client = useClient();
    const theme = useTheme();

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Router />

                <Loader />
                <Snackbar />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
