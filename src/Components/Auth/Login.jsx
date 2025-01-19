import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { user, setUser, loginWithGoogle, loginWithEmailPass, setLoading } = useContext(AuthContext)

    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const [show, setShow] = useState(false)
    const [captchaInpLen, setCaptchaInpLen] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log({ email, password })

        loginWithEmailPass(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                navigate(location.state?.from?.pathname || '/')
                setLoading(false)
                toast.success('logged in successfully')
            })
            .catch(err => {
                console.log(err)
                toast.error('Invalid email or password')
            })
    }

    const handleShow = () => {
        setShow(!show)
    }

    const handleValidateCaptcha = e => {
        const user_captcha_value = captchaRef.current.value
        setCaptchaInpLen(user_captcha_value.length)

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }

    }

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [captchaInpLen === 0])


    return (
        <div className='flex flex-col lg:flex-row lg:items-center justify-evenly shadow-2xl p-12 rounded-lg bg-white bg-opacity-35'>
            
            <div className='relative lg:w-96'>
                <h1 className='text-3xl font-bold text-center py-4'>Login</h1>
                <form onSubmit={handleSubmit} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                    </div>

                    {/* <div className="form-control mt-4">
                        <label className="label ">
                            <LoadCanvasTemplate />
                        </label>
                        <div className='flex'>
                            <input ref={captchaRef} type="text" placeholder="type the text above" className="input w-full input-bordered" required />
                        </div>
                    </div> */}

                    <div className="form-control mt-6">
                        <button disabled={false} className="btn bg-gradient-to-r from-[#6AAEFF] to-[#f4b4fa]">Login</button>
                    </div>
                </form>

                <button onClick={handleShow} className='absolute right-3 bottom-[348px] text-[#f07ffa]'>
                    {show ? <TbEyeglassOff /> : <TbEyeglass />}
                </button>

                {/* <button onClick={handleValidateCaptcha} className='absolute right-3 bottom-[214px] text-[#D1A054B3]'>
                    {disable ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
                </button> */}

                <div className='text-center my-3'>
                    <Link to={'/auth/register'} className='text-center hover:text-[#f07ffa]'>New here? Create a New Account</Link>
                    <p className='text-center my-4 text-gray-600'>Or sign in with</p>
                    <div className=' w-1/3 mx-auto mt-5 flex justify-between'>
                        <div className='border border-[#444444] rounded-full p-1 '>
                            <FaFacebook className='text-xl text-[#444444]' />
                        </div>

                        <div className='border border-[#444444] rounded-full p-1 '>
                            <FaGoogle className='text-xl text-[#444444] hover:text-[#f07ffa]' />
                        </div>

                        <div className='border border-[#444444] rounded-full p-1'>
                            <FaGithub className='text-xl text-[#444444]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;