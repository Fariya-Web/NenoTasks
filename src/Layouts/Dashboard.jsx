import React from 'react';
import { GrHistory, GrMail, GrTask } from 'react-icons/gr';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { IoMdHome } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo/image.png'
import { ImSpoonKnife } from 'react-icons/im';
import { FaBook, FaListUl, FaTasks } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { TbNetwork } from 'react-icons/tb';
import { BsCurrencyExchange, BsListTask } from 'react-icons/bs';
import { RiPlayListAddLine } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';
import Footer from '../Components/Shared/Footer';
import DashNav from '../Components/Shared/DashNav';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useWorker from '../Hooks/useWorker';
import { CgProfile } from "react-icons/cg";



const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isBuyer] = useBuyer()
    const [isWorker] = useWorker()

    return (
        <div>

            <Helmet>
                <title>NanoTasks | Dashboard</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className="drawer lg:drawer-open dark:text-white">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#edeff0] dark:bg-[#110b14]">
                    {/* Page content here */}
                    {/* sidewbar button */}
                    {/* <label htmlFor="my-drawer-2" className=" drawer-button absolute left-5 top-3 lg:hidden">
                        <IoMenu className='text-2xl' />
                    </label> */}
                    <DashNav />
                    <Outlet />
                    <Footer />

                </div>
                <div className="drawer-side z-20 border-r border-white dark:border-none">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-gradient-to-br dark:from-[#2c1d34] dark:to-[#4a1542] from-[#f1f5fb] to-[#d2e3fb] text-xl min-h-full w-80 p-4">
                        {/* Sidebar content here */}

                        <div className=' flex gap-4 mx-auto py-14'>
                            <img className='w-10' src={logo} alt="" />
                            <Link to={'/'} className=" text-2xl md:text-3xl font-bold ">NanoTasks</Link>
                        </div>


                        {/* admin routes */}
                        {
                            isAdmin &&
                            <div className='uppercase py-16'>

                                <li><NavLink to='/dashboard/adminhome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />Admin Home</NavLink></li>

                                {/* <li><NavLink to='/dashboard/adminprofile' className={'py-3 my-1'}><CgProfile className='text-2xl' />Admin Profile</NavLink></li> */}

                                <li><NavLink to='/dashboard/allusers' className={'py-3 my-1'}><MdGroups className='text-2xl' />All Users</NavLink></li>

                                <li><NavLink to='/dashboard/alltasks' className={'py-3 my-1'}><TbNetwork className='text-2xl' />Manage Tasks</NavLink></li>


                            </div>
                        }


                        {/* worker routes */}
                        {
                            isWorker &&
                            <div className='uppercase py-16'>

                                <li><NavLink to='/dashboard/userhome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />User Home</NavLink></li>

                                {/* <li><NavLink to='/dashboard/userprofile' className={'py-3 my-1'}><CgProfile className='text-2xl' />User Profile</NavLink></li> */}

                                <li><NavLink to='/dashboard/tasklist' className={'py-3 my-1'}><BsListTask className='text-2xl' />Task List</NavLink></li>

                                <li><NavLink to='/dashboard/submissions' className={'py-3 my-1'}><GrTask className='text-2xl' />My Submissions</NavLink></li>

                                <li><NavLink to='/dashboard/withdrawals' className={'py-3 my-1'}><BsCurrencyExchange className='text-2xl' />Withdrawals</NavLink></li>

                            </div>
                        }


                        {/* buyer routes */}
                        {
                            isBuyer &&
                            <div className='uppercase pt-12 pb-5'>

                                <li><NavLink to='/dashboard/buyerhome' className={'py-3 my-1'}><IoMdHome className='text-2xl' />Buyer Home</NavLink></li>

                                {/* <li><NavLink to='/dashboard/buyerprofile' className={'py-3 my-1'}><CgProfile className='text-2xl' />Buyer Profile</NavLink></li> */}

                                <li><NavLink to='/dashboard/addtask' className={'py-3 my-1'}><RiPlayListAddLine className='text-2xl' />Add new tasks</NavLink></li>


                                <li><NavLink to='/dashboard/mytasks' className={'py-3 my-1'}><FaTasks className='text-2xl' />My Tasks</NavLink></li>


                                <li><NavLink to='/dashboard/purchase' className={'py-3 my-1'}><BsCurrencyExchange className='text-2xl' />Purchase Coins</NavLink></li>


                                <li><NavLink to='/dashboard/transactions' className={'py-3 my-1'}><GrHistory className='text-2xl' />Payment History</NavLink></li>

                            </div>
                        }


                        <hr className='my-10 bg-white dark:h-[1px] h-1' />

                        {/* shared routes */}
                        <div className='uppercase'>
                            <li className='my-2'><Link to={'/'}><IoMdHome className='text-2xl' />Home</Link></li>
                            <li className='my-2'><Link to={'/'}><IoMenu className='text-2xl' />Menu</Link></li>
                            <li className='my-2'><Link to={'/'}><HiMiniShoppingBag className='text-2xl' />Shop</Link></li>
                            <li className='my-2'><Link to={'/'}><GrMail className='text-2xl' />Contact</Link></li>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;