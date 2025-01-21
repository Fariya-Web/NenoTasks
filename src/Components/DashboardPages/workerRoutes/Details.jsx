import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import coin from '../../../assets/icons/coin.png'
import worker from '../../../assets/icons/employee.png'
import deadline from '../../../assets/icons/schedule.png'
import buyer from '../../../assets/icons/business-women.png'
import email from '../../../assets/icons/gmail.png'
import requirement from '../../../assets/logo/parchment.png'


const Details = () => {

    const { id } = useParams()
    console.log(id);

    const axiosSecure = useAxiosSecure()

    const { data: task, isLoading } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/task/${id}`)
            return res.data
        }
    })
    console.log(task);


    return (
        <div className='py-10 w-[92%]  max-w-screen-xl mx-auto'>
            <div className='p-4 border border-white rounded-lg grid gap-5 md:grid-cols-2 bg-gradient-to-br from-[#dce9fb] to-[#fbe4fc] '>
                <img className='rounded-md' src={task?.task_image_url} alt="" />
                <div>
                    <h2 className='text-4xl font-bold'>{task?.task_title}</h2>

                    <div className='flex gap-3 my-3'>
                        <img className='w-10 py-3' src={requirement} alt="" />
                        <p className='text-xl my-3'>{task?.task_detail}</p>
                    </div>


                    <div className='text-xl font-medium space-y-2'>

                        <li className='flex items-center gap-2'>
                            Pay Ammount: {task?.payable_amount}
                            <img className='w-7 h-7' src={coin} alt="" />
                        </li>

                        <li className='flex items-center gap-2'>
                            Required Workers: {task?.required_workers}
                            <img className='w-7 h-7' src={worker} alt="" />
                        </li>

                        <li className='flex items-center gap-2'>
                            Deadline: {task?.completion_date}
                            <img className='w-7 h-7' src={deadline} alt="" />
                        </li>

                        <li className='flex items-center gap-2'>
                            Buyer Name: {task?.buyer_name}
                            <img className='w-7 h-7' src={buyer} alt="" />
                        </li>

                        <li className='flex items-center gap-3'>
                            Buyer Name: {task?.buyer_email}
                            <img className='w-6 h-6' src={email} alt="" />
                        </li>
                    </div>

                    <p className='text-xl my-4'><span className='font-semibold underline underline-offset-2'>What to submit</span> - {task?.submission_info}</p>
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Details;