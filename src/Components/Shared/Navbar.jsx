import React, { useContext } from 'react';
import { Link, Links, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import bank from '../../assets/icons/piggy-bank.png'

const Navbar = () => {

    const { user, logOut, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignout = () => {
        logOut()
            .then(res => {
                toast.success(`Logged out`)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                toast.error('Failed to sign out. try again')
            })
        setLoading(false)
    }

    const links =
        <>
            {
                user &&
                <li><Link to={'/dashboard'} className='mx-3  text-lg  hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text'>Dashboard</Link></li>
            }
            <li><a href='' className='mx-3 underline text-lg hover:bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] hover:text-transparent hover:bg-clip-text '>Join as Developer</a></li>
            {
                user &&
                <>
                    <div tabIndex={0} role="button" className="btn mx-2 btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 border-2 p-1 mx-1 min-w-14  rounded-md'>
                        <div className='mx-auto my-auto text-lg'>{0}</div>
                        <div><img className='w-8' src={bank} alt="" /></div>
                    </div>
                </>
            }
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
                        <ul className="font-medium items-center menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="text-lg font-medium">
                        {
                            user ?
                                <button onClick={handleSignout} className="p-2 px-4 bg-gradient-to-r from-[#8cbefa]/35 to-[#f4b4fa]/35 hover:from-[#8cbefa]/70 hover:to-[#f4b4fa]/70 rounded-lg border">Log Out</button>
                                :
                                <div className="join">
                                    <div className='join-item my-auto rounded-lg'>
                                        <Link to={'/auth'} className="p-2 px-4 bg-gradient-to-r from-[#8cbefa]/35 to-[#f4b4fa]/35 hover:from-[#8cbefa]/70 hover:to-[#f4b4fa]/70 join-item">Login</Link>
                                    </div>
                                    <div className='join-item my-auto rounded-lg'>
                                        <Link to={'/auth/register'} className="p-2 px-4 bg-gradient-to-r from-[#8cbefa]/30 to-[#f4b4fa]/35 hover:from-[#8cbefa]/70 hover:to-[#f4b4fa]/70 join-item">Register</Link>
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