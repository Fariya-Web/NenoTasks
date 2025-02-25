import React from 'react';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='bg-[#fcf9fc] dark:bg-[#110b14] dark:text-white'>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Root;