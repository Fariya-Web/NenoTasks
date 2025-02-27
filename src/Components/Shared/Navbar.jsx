import React, { useContext } from 'react';
import { Link, Links, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import bank from '../../assets/icons/piggy-bank.png'
import logo from '../../assets/logo/image.png'
import useUser from '../../Hooks/useUser';
import { motion } from 'motion/react';

const Navbar = () => {

    const { user, logOut, setLoading, dark, setDark } = useContext(AuthContext)
    const [dbuser, isLoading] = useUser()
    const navigate = useNavigate()

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }

    const handleTheme = () => {
        setDark(!dark)
        document.body.classList.toggle("dark");
    }

    const handleSignout = () => {
        logOut()
            .then(res => {
                toast.success(`Logged out`)
                navigate('/')
            })
            .catch(err => {

                toast.error('Failed to sign out. try again')
            })
        setLoading(false)
    }

    const links =
        <>

            <li><Link to={'/'} className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Home</Link></li>

            {
                user && dbuser?.role == 'admin' &&
                <li><Link to={'/dashboard/adminhome'} className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Dashboard</Link></li>
            }
            {
                user && dbuser?.role == 'worker' &&
                <li><Link to={'/dashboard/userhome'} className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Dashboard</Link></li>
            }
            {
                user && dbuser?.role == 'buyer' &&
                <li><Link to={'/dashboard/buyerhome'} className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Dashboard</Link></li>
            }

            <li><Link to={'/contact'} className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Contact Dev</Link></li>

            <li><a href='https://github.com/Fariya-Khan-Web/NanoTasks' className='mx-3 underline text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Join as Developer</a></li>

        </>



    return (
        <div className='sticky top-0 z-10 bg-whit bg-gradient-to-br dark:from-[#4d46b0]/50 dark:to-[#872a79]/50 from-[#8cbefa]/50 to-[#f4b4fa]/40 bg-opacity-70 font-medium'>
            <div className="navbar lg:w-[94%] md:w-[98%] max-w-screen-2xl mx-auto flex justify-between">
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
                            className="menu menu-sm text-center dropdown-content dark:bg-[#271c2d] bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl">
                            {links}
                        </ul>
                    </div>
                    <img className='w-10 mr-2 hidden md:block' src={logo} alt="" />
                    <Link to={'/'} className=" md:text-4xl font-bold text-xl bg-clip-text">NanoTasks</Link>
                </div>
                <div className=' flex items-center'>

                    <div className=" hidden lg:flex">
                        <ul className="font-medium text-center items-center menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="text-lg font-medium">
                        {
                            user ?
                                <div className='flex items-center'>

                                    <div className='grid grid-cols-2 border-2 p-1 px-2 mx-1 my-2 min-w-14 bg-white/60 dark:bg-transparent rounded-md'>
                                        <div className=' my-auto md:mx-auto text-lg'>{dbuser?.coin}</div>
                                        <div><img className='w-8' src={bank} alt="" /></div>
                                    </div>

                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn mx-2 btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS Navbar component"
                                                    src={dbuser?.photo_url || user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 dark:bg-[#1f1524] rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl border">
                                            <li><a>{user?.displayName}</a></li>
                                            <li><a>Update Profile</a></li>
                                            <li onClick={handleSignout}><a>Logout</a></li>
                                        </ul>
                                    </div>

                                </div>
                                :
                                <div className="join mx-1">
                                    <div className='join-item my-auto rounded-lg'>
                                        <Link to={'/auth'} className="p-2 px-4 border-2 border-white join-item">Login</Link>
                                    </div>
                                    <div className='join-item my-auto rounded-lg'>
                                        <Link to={'/auth/register'} className="p-2 px-4 border-2 border-white join-item">Register</Link>
                                    </div>
                                </div>
                        }

                    </div>
                    <div className="flex">
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" onClick={handleTheme} />

                            {/* sun icon */}
                            <svg
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-off h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;