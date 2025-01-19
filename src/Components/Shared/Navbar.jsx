import React from 'react';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {

    const links =
        <>
            <li><Link className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Item 1</Link></li>
            <li><Link className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Parent</Link></li>
            <li><a href='' className='mx-3 underline text-lg hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Join as Developer</a></li>
        </>

    return (
        <div className='sticky top-0 bg-white bg-opacity-50'>
            <div className="navbar bg-base-100 lg:w-[90%] md:w-[96%]  mx-auto flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 -ml-4 -mr-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className=" md:text-3xl font-bold text-xl  bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] text-transparent bg-clip-text">NanoTasks</Link>
                </div>
                <div className=' flex items-center'>

                    <div className=" hidden lg:flex">
                        <ul className="font-medium menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="text-lg font-medium">
                        <div className="join">
                            <div className='join-item my-auto rounded-lg'>
                                <Link to={'/auth'} className="p-2 px-4 bg-gradient-to-r from-[#8cbefa]/35 to-[#f4b4fa]/35 hover:from-[#8cbefa]/70 hover:to-[#f4b4fa]/70 join-item">Login</Link>
                            </div>
                            <div className='join-item my-auto rounded-lg'>
                                <Link to={'/auth/register'} className="p-2 px-4 bg-gradient-to-r from-[#8cbefa]/30 to-[#f4b4fa]/35 hover:from-[#8cbefa]/70 hover:to-[#f4b4fa]/70 join-item">Register</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;