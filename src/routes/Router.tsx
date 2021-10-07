//#region Imports

import RouteFactory from 'models/route-factory';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from './routes';

//#endregion

const Router = () => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map(({ path, exact, component }: RouteFactory, index: number) => (
                <Route key={index} path={path} exact={exact} component={component} />
            ))}
        </Switch>
    </BrowserRouter>
);

export default Router;
