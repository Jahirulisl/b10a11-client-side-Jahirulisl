import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shsred/Navbar';
import Footer from '../pages/shsred/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;