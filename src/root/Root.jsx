import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;