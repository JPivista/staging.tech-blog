import React from 'react'
import { useRoutes } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

import HomePage from '../pages/HomePage'
import AboutUs from '../pages/AboutUs'
import NotFound from '../pages/NotFound';
import PostLandingPage from '../LandingPage/PostLandingPage';

const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <HomePage /> },
                { path: "/about-us", element: <AboutUs /> },
                { path: "/posts/:postId", element: <PostLandingPage /> },
                { path: "*", element: <NotFound />, },
            ]
        }
    ]);

    return routes;
}

export default AppRoutes
