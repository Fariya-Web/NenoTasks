import React from 'react';
import { FaFacebookF, FaGithub, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/logo/exchanging.png'

const Footer = () => {
    return (
        <div className='bg-gradient-to-br from-[#dce9fb] to-[#fbe4fc]'>
            <footer className="footer  text-base-content max-w-screen-2xl mx-auto p-10">
                <nav>
                    <h6 className="footer-title text-lg">Services</h6>
                    <a className="link link-hover hover:text-[#f07ffa] ">Branding</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Design</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Marketing</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lg">Company</h6>
                    <a className="link link-hover hover:text-[#f07ffa]">About us</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Contact</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Jobs</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lg">Legal</h6>
                    <a className="link link-hover hover:text-[#f07ffa] ">Terms of use</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Privacy policy</a>
                    <a className="link link-hover hover:text-[#f07ffa]">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer  text-base-content max-w-screen-2xl mx-auto border-t-2 border-white px-10 py-4">
                <aside className="grid-flow-col gap-4 items-center">
                    <img className='w-10' src={logo} alt="" />
                    <p>
                        <h3 className=" md:text-3xl font-bold text-xl  bg-gradient-to-r from-[#5ca3f9] to-[#f49efb] text-transparent bg-clip-text">NanoTasks</h3>
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="flex items-center gap-5 text-2xl">
                        <a href='https://www.linkedin.com/in/fariya-khan-sana/'><FaLinkedinIn className='text-gray-600 hover:text-[#f07ffa] hover:text-4xl hover:pb-1' /></a>
                        <a href='https://github.com/Fariya-Khan-Web'><FaGithubAlt className='text-gray-600 hover:text-[#f07ffa] hover:text-4xl hover:pb-1' /></a>
                        <a href='https://www.facebook.com/fariyakhansana'><FaFacebookF className='text-gray-600  hover:text-[#f07ffa] hover:text-4xl hover:pb-1' /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;