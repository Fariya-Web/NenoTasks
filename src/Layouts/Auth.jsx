import React from 'react';
import { Outlet } from 'react-router-dom';
import authbg from '../assets/auth/authbg.webp'

const Auth = () => {
    return (
        <div className='min-h-screen flex justify-center items-center' style={{ background: `url("${authbg}")`, backgroundSize: 'cover' }}>
            <Outlet/>
        </div>
    );
};

export default Auth;