import React from 'react'
import { useRoutes } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <HomePage /> },
                { path: "*", element: <NotFound />, },
            ]
        }
    ]);

    return routes;
}

export default AppRoutes