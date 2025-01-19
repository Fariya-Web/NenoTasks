import React from 'react';
import { GrMail, GrTask } from 'react-icons/gr';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { IoMdHome } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo/exchanging.png'
import { ImSpoonKnife } from 'react-icons/im';
import { FaBook, FaListUl } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { TbNetwork } from 'react-icons/tb';
import { BsCurrencyExchange, BsListTask } from 'react-icons/bs';

const Dashboard = () => {

    // TODO- get isAdmin fron DB
    // const [isAdmin] = useAdmin()
    const isAdmin = false
    const isWorker = true
    const isBuyer = false
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
                    <ul className="menu bg-gradient-to-br from-[#f1f5fb] to-[#d2e3fb] text-xl min-h-full w-80 p-4">
                        {/* Sidebar content here */}

                        <div className=' flex gap-4 mx-auto py-14'>
                            <img className='w-10' src={logo} alt="" />
                            <h2 className=" text-2xl md:text-3xl font-bold  bg-gradient-to-r from-[#88bcfc] to-[#f2aef8] text-transparent bg-clip-text">NanoTasks</h2>
                        </div>


                        {/* admin routes */}
                        {
                            isAdmin &&
                            <div className='uppercase'>

                                <li><NavLink to='/dashboard/adminhome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />Admin Home</NavLink></li>

                                <li><NavLink to='/dashboard/allusers' className={'py-3 my-1'}><MdGroups className='text-2xl' />All Users</NavLink></li>

                                <li><NavLink to='/dashboard/alltasks' className={'py-3 my-1'}><TbNetwork className='text-2xl' />Manage Tasks</NavLink></li>


                            </div>
                        }


                        {/* worker routes */}
                        {
                            isWorker &&
                            <div className='uppercase'>

                                <li><NavLink to='/dashboard/userhome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />User Home</NavLink></li>

                                <li><NavLink to='/dashboard/tasklist' className={'py-3 my-1'}><BsListTask className='text-2xl' />Task List</NavLink></li>

                                <li><NavLink to='/dashboard/submissions' className={'py-3 my-1'}><GrTask className='text-2xl' />My Submissions</NavLink></li>

                                <li><NavLink to='/dashboard/withdrawals' className={'py-3 my-1'}><BsCurrencyExchange className='text-2xl' />Withdrawals</NavLink></li>

                            </div>
                        }


                        {/* 
                        {
                            isBuyer &&
                            <div className='uppercase'>
                                <li><NavLink to='/dashboard/userHome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation' className={'py-3 my-1'}><FaCalendarAlt className='text-2xl' />Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/payHistory' className={'py-3 my-1'}><LuHistory className='text-2xl' />Payment history</NavLink></li>
                                <li><NavLink to='/dashboard/cart' className={'py-3 my-1'}><MdShoppingCart className='text-2xl' />my cart</NavLink></li>
                                <li><NavLink to='/dashboard/review' className={'py-3 my-1'}><VscFeedback className='text-2xl' />Add review</NavLink></li>
                                <li><NavLink to='/dashboard/booking' className={'py-3 my-1'}><MdOutlineEditCalendar className='text-2xl' />my booking</NavLink></li>
                            </div>
                        }
 */}

                        <hr className='my-10 bg-white h-1' />

                        {/* shared routes */}
                        <div className='uppercase'>
                            <li className='my-2'><Link to={'/'}><IoMdHome className='text-2xl' />Home</Link></li>
                            <li className='my-2'><Link to={'/'}><IoMenu className='text-2xl' />Menu</Link></li>
                            <li className='my-2'><Link to={'/ourshop'}><HiMiniShoppingBag className='text-2xl' />Shop</Link></li>
                            <li className='my-2'><Link to={'/contact'}><GrMail className='text-2xl' />Contact</Link></li>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;