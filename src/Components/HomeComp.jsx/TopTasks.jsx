import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { motion } from "motion/react"
import {Link} from 'react-router-dom'

const TopTasks = () => {

    const axiosPublic = useAxiosPublic()

    const { data: toptasks = [], isLoading, refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosPublic.get('/toptasks')
            return res.data
        }
    })


    return (

        <div className='w-[96%] max-w-screen-2xl mx-auto my-24'>
            <div>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold'>Top Earning Opprtunities Waiting for you</h1>
                <p className=' text-lg font-medium w-[90%] lg:w-[60%] my-4'>Join the most in-demand tasks that require a high number of workers. These tasks are perfect for those looking to maximize their earnings and contribute to large-scale projects.</p>
             
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto my-8 lg:my-14'>
                {
                    toptasks.map(task => <motion.div
                    key={task._id}
                        whileHover={{ scale: 1.06 }}
                        className='p-[4px] border dark:border-none rounded-xl bg-gradient-to-r from-[#abcffb] to-[#fbcfff] dark:from-[#2d2961] dark:to-[#571e4f]'>

                        <div className='grid grid-cols-2 bg-gray-100 dark:bg-[#1b1220] rounded-xl h-full'>
                            <div className='w-full h-64'>
                                <img className='w-full h-full rounded-l-xl' src={task.task_image_url} alt="" />
                            </div>

                            <div className='p-2 flex flex-col'>
                                <h3 className='text-xl text-center lg:text-2xl font-semibold lg:mb-2'>{task.task_title}</h3>

                                <div className='my-auto'>

                                    <li >
                                        {/* <img className='w-5 h-5' src={worker} alt="" /> */}
                                        <span className='font-medium'>Required Workers:</span> {task.required_workers}
                                    </li>
                                    <li >
                                        {/* <img className='w-5 h-5' src={coin} alt="" /> */}
                                        <span className='font-medium'>Pay Amount:</span> {task.payable_amount}
                                    </li>

                                    <li >
                                        {/* <img className='w-5 h-5' src={deadline} alt="" /> */}
                                        <span className='font-medium'>Deadline:</span> {task.completion_date}
                                    </li>

                                    <li >
                                        {/* <img className='w-5 h-5' src={buyer} alt="" /> */}
                                        <span className='font-medium'>Buyer Name:</span> {task.buyer_name}
                                    </li>


                                </div>

                                <button className='btn btn-sm px-6 w-fit bg-gradient-to-r from-[#abcffb] to-[#fbcfff] dark:from-[#353173] dark:to-[#6a2561] dark:border-none dark:text-white'><Link to='/dashboard/tasklist'>See More</Link></button>

                            </div>
                        </div>

                    </motion.div>)
                }
            </div>

        </div>
    );
};

export default TopTasks;