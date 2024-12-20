import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/shared/Navbar/Header';
import Footer from '../components/shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top when the route changes
        window.scrollTo(0, 0);
    }, [location]);  // The effect runs whenever the location changes

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
