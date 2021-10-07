//#region Imports

import Home from 'views/home';
import RouteFactory from 'models/route-factory';

//#endregion

const ROUTES: Array<RouteFactory> = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        exact: true,
        path: '/home',
        component: Home
    },
    {
        path: '*',
        exact: true,
        component: Home
    }
];

export default ROUTES;
