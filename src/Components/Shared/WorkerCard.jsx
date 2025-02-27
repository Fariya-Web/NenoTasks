import React from 'react';
import { motion } from "motion/react"

import bank from '../../assets/icons/piggy-bank.png'
import useUser from '../../Hooks/useUser';


const WorkerCard = ({ worker }) => {

    const { name, photo_url, coin } = worker


    return (
        <motion.div
            whileHover={{ scale: 1.09 }}
            whileTap={{ scale: 0.8 }}
            className='p-[2px] border dark:border-none rounded-2xl bg-gradient-to-r from-[#abcffb] to-[#fbcfff] dark:from-[#2d2961] dark:to-[#571e4f]'>
            <div

                className='bg-white dark:bg-[#1b1220] p-2 rounded-2xl relative group'>
                <img className='w-full h-72 rounded-2xl ' src={photo_url} alt="" />

                <div
                    className='absolute left-10 right-10 bottom-2 mt-2 hidden px-2 py-1 rounded group-hover:block'>

                    <div className='bg-gradient-to-r from-[#d1e5fd]/35 to-[#fcdeff]/35  font-medium text-white grid gap-2 grid-cols-2 border-2 p-1 px-3 my-2 min-w-14  rounded-md max-w-fit mx-auto'>
                        <div className=' my-auto md:mx-auto text-lg'>{coin}</div>
                        <div><img className='w-8' src={bank} alt="" /></div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default WorkerCard;