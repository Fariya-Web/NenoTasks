import React, { useContext } from 'react';
import { Link, Links, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import bank from '../../assets/icons/piggy-bank.png'
import logo from '../../assets/logo/image.png'
import useUser from '../../Hooks/useUser';
import { motion } from 'motion/react';

const Navbar = () => {

    const { user, logOut, setLoading } = useContext(AuthContext)
    const [dbuser, isLoading] = useUser()
    const navigate = useNavigate()

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
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

            <li><a href='https://github.com/Fariya-Khan-Web/NanoTasks' className='mx-3 underline text-lg hover:text-[#b0d4ff] '>Join as Developer</a></li>

        </>



    return (
        <div className='sticky top-0 z-10 bg-whit bg-gradient-to-r from-[#8cbefa]/50 to-[#f4b4fa]/40 bg-opacity-70 font-medium'>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className='w-10 mr-2 hidden md:block' src={logo} alt="" />
                    <Link to={'/'} className=" md:text-4xl font-bold text-xl  bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] bg-clip-text">NanoTasks</Link>
                </div>
                <div className=' flex items-center'>

                    <div className=" hidden lg:flex">
                        <ul className="font-medium items-center menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="text-lg font-medium">
                        {
                            user ?
                                <div className='flex items-center'>

                                    <div className='grid grid-cols-2 border-2 p-1 px-2 mx-1 my-2 min-w-14  rounded-md'>
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
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <li><a>{user?.displayName}</a></li>
                                            <li><a>Update Profile</a></li>
                                            <li onClick={handleSignout}><a>Logout</a></li>
                                        </ul>
                                    </div>

                                </div>
                                :
                                <div className="join">
                                    <div className='join-item my-auto rounded-lg'>
                                        <Link to={'/auth'} className="p-2 px-4 border-2 border-white join-item">Login</Link>
                                    </div>
                                    <div className='join-item my-auto rounded-lg'>
                                        <Link to={'/auth/register'} className="p-2 px-4 border-2 border-white join-item">Register</Link>
                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;