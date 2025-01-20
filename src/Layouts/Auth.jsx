import React from 'react';
import { Outlet } from 'react-router-dom';
import authbg from '../assets/auth/authbg.webp'
import { Helmet } from 'react-helmet-async';

const Auth = () => {
    return (
        <div className='min-h-screen flex justify-center items-center' style={{ background: `url("${authbg}")`, backgroundSize: 'cover' }}>
            <Helmet>
                <title>NanoTasks | Auth</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Outlet />
        </div>
    );
};

export default Auth;