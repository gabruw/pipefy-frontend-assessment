//#region Imports

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'storages/system/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

//#endregion

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
