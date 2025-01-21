import React from 'react';
import { motion } from "motion/react"

import bank from '../../assets/icons/piggy-bank.png'
import useUser from '../../Hooks/useUser';


const WorkerCard = ({ worker }) => {

    const { name, photo_url, coin } = worker


    return (
        <div className='p-[2px] border rounded-lg bg-gradient-to-r from-[#abcffb] to-[#fbcfff]'>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className='bg-white p-2 rounded-lg relative group'>
                <img className='w-full h-52 rounded-md ' src={photo_url} alt="" />
                
                <div
                    className='absolute left-10 right-10 bottom-2 mt-2 hidden px-2 py-1 rounded group-hover:block'>
                    
                    <div className='bg-gradient-to-r from-[#d1e5fd]/35 to-[#fcdeff]/35 font-medium text-white grid gap-2 grid-cols-2 border-2 p-1 px-3 my-2 min-w-14  rounded-md max-w-fit mx-auto'>
                        <div className=' my-auto md:mx-auto text-lg'>{coin}</div>
                        <div><img className='w-8' src={bank} alt="" /></div>
                    </div>
                
                </div>
            </motion.div>
        </div>
    );
};

export default WorkerCard;