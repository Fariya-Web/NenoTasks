import React from 'react';
import { GrMail } from 'react-icons/gr';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { IoMdHome } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo/exchanging.png'

const Dashboard = () => {

    // TODO- get isAdmin fron DB
    // const [isAdmin] = useAdmin()
    const isAdmin = false
    console.log(isAdmin)

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F6F6F6]">
                    {/* Page content here */}
                    {/* sidewbar button */}
                    <label htmlFor="my-drawer-2" className=" drawer-button absolute left-5 top-3 lg:hidden">
                        <IoMenu className='text-2xl' />
                    </label>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-gradient-to-br from-[#ecf2fa] to-[#d2e3fb] text-xl min-h-full w-80 p-4">
                        {/* Sidebar content here */}

                        <div className=' flex gap-4 mx-auto py-14'>
                            <img className='w-10' src={logo} alt="" />
                            <h2 className=" text-2xl md:text-3xl font-bold  bg-gradient-to-r from-[#88bcfc] to-[#f2aef8] text-transparent bg-clip-text">NanoTasks</h2>
                        </div>

                        

                        <hr className='my-10' />

                        {/* shared routes */}
                        <div className='uppercase'>
                            <li><Link to={'/'}><IoMdHome className='text-2xl' />Home</Link></li>
                            <li><Link to={'/'}><IoMenu className='text-2xl' />Menu</Link></li>
                            <li><Link to={'/ourshop'}><HiMiniShoppingBag className='text-2xl' />Shop</Link></li>
                            <li><Link to={'/contact'}><GrMail className='text-2xl' />Contact</Link></li>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;