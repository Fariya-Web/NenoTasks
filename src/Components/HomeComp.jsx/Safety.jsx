import React from 'react';
import secure from '../../assets/logo/cyber-security.png'
import privacy from '../../assets/logo/compliant.png'
import check from '../../assets/icons/check.png'
import { motion } from 'motion/react';

const Safety = () => {
    return (
        <div className='grid md:grid-cols-2 my-32'>

            <div className='bg-gradient-to-r from-[#cbe2ff] to-[#f8d3fc] p-32 py-44 '>
                <motion.img whileHover={{ scale: 1.2 }} className='mx-auto w-56' src={privacy} alt="" />
            </div>

            <div className='bg-[#e6e9ed] text-lg p-12 py-28 lg:p-32 lg:py-44'>
                <h1 className='text-5xl font-bold'>Keeping your data safe</h1>
                <p className='text-lg my-5'>We prioritize your data privacy above all else. Our platform is designed with robust security measures to ensure that your personal information remains safe and protected at all times..</p>
                <ul className='pl-12 space-y-2'>
                    <li className='flex gap-2 items-center'>
                        <img className='w-6 h-6' src={check} alt="" />
                        Data security
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-6 h-6' src={check} alt="" />
                        Safe and protected
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-6 h-6' src={check} alt="" />
                        Transparent handling of your data
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Safety;