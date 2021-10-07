//#region Imports

import 'assets/styles/global.css';
import Loader from 'components/Loader';
import React, { FC } from 'react';
import Router from 'routes/Router';
import { LoaderContextProvider } from 'storages/loader/context';

//#endregion

const App: FC = () => (
    <LoaderContextProvider>
        <Loader />
        <Router />
    </LoaderContextProvider>
);

export default App;
