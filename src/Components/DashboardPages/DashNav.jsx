import React, { useContext } from 'react';
import { IoMenu } from 'react-icons/io5';
import bank from '../../assets/icons/piggy-bank.png'
import useUser from '../../Hooks/useUser';
import { AuthContext } from '../Provider/AuthProvider';
import logo from '../../assets/logo/image.png'
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';

const DashNav = () => {

    const [dbuser, isLoading] = useUser()
    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    {/* sidebar button */}
                    <label htmlFor="my-drawer-2" className=" drawer-button absolute left-5 top-4 lg:hidden">
                        <IoMenu className='text-2xl my-2' />
                    </label>

                    {/* logo */}
                    <div className="ml-12 flex gap-2 lg:hidden">
                        <img className='w-10' src={logo} alt="" />
                        <Link to={'/'} className=" text-2xl md:text-3xl font-bold  bg-gradient-to-r from-[#88bcfc] to-[#f2aef8] text-transparent bg-clip-text">NanoTasks</Link>
                    </div>

                </div>


                <div className="navbar-end">

                    {/* name role */}
                    <div className='mx-2 text-end'>
                        <h3 className='font-bold text-lg'>{user?.displayName}</h3>
                        <p className='font-semibold text-xs'>{user?.displayName} is a {dbuser?.role}</p>
                    </div>

                    {/* picture */}
                    <div tabIndex={0} role="button" className="btn mx-2 btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                        </div>
                    </div>

                    {/* coin */}
                    <div className='grid grid-cols-2 border-2 p-1 px-3 mx-1 my-2 min-w-14  rounded-md'>
                        <div className=' my-auto md:mx-auto text-lg'>{dbuser?.coin}</div>
                        <div><img className='w-8' src={bank} alt="" /></div>
                    </div>

                    {/* notification */}
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <IoMdNotificationsOutline className='text-4xl' />
                            <span className="badge badge-sm bg-red-600 indicator-item"></span>
                        </div>
                    </button>

                </div>
            </div>

        </div>
    );
};

export default DashNav;