import React from 'react';
import { FaFacebookF, FaGithub, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

import logo4 from '../../assets/logo/image.png'

const Footer = () => {
    return (
        <div className='dark:border-none dark:bg-[#1b1220] bg-gradient-to-br dark:from-[#1b1220] dark:to-[#1b1220] dark:text-white from-[#dce9fb] to-[#fbe4fc] border-t-2 border-white'>
            <footer className="footer  text-base-content max-w-screen-2xl mx-auto p-10">
                <nav>
                    <h6 className="footer-title dark:text-white text-lg">Services</h6>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa] ">Branding</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Design</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Marketing</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title dark:text-white text-lg">Company</h6>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">About us</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Contact</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Jobs</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title dark:text-white text-lg">Legal</h6>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa] ">Terms of use</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Privacy policy</a>
                    <a className="link link-hover dark:text-white hover:text-[#8cbefa]">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer flex justify-between text-base-content max-w-screen-2xl mx-auto border-t-2 border-white px-10 py-4">
                <aside className="grid-flow-col gap-4 items-center">
                    <img className='w-10' src={logo4} alt="" />
                    <p>
                        <h3 className=" md:text-3xl font-bold text-xl dark:text-white  bg-gradient-to-r from-[#5ca3f9] to-[#f49efb] text-transparent bg-clip-text">NanoTasks</h3>
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="flex items-center gap-5 text-2xl">
                        <a href='https://www.linkedin.com/in/fariya-khan-sana/'><FaLinkedinIn className='text-gray-600 dark:text-white hover:text-[#8cbefa] hover:text-4xl hover:pb-1' /></a>
                        <a href='https://github.com/Fariya-Khan-Web'><FaGithubAlt className='text-gray-600 dark:text-white hover:text-[#8cbefa] hover:text-4xl hover:pb-1' /></a>
                        <a href='https://www.facebook.com/fariyakhansana'><FaFacebookF className='text-gray-600 dark:text-white  hover:text-[#8cbefa] hover:text-4xl hover:pb-1' /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;