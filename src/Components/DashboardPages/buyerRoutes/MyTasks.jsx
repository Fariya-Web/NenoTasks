import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from './../../Provider/AuthProvider';

const MyTasks = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: mytasks = [], isLoading, refetch } = useQuery({
        queryKey: ['mytask'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks/${user.email}`)
        }
    })

    return (
        <div className='py-10'>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-white p-12 my-12 rounded'>

                <div className='flex justify-between uppercase'>
                    <h2 className='text-xl md:text-2xl font-semibold'>Total Tasks: {mytasks.length}</h2>
                </div>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className="table table-zebra text-center ">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] text-lg uppercase font-medium '>
                            <tr className='h-16'>
                                <th></th>
                                <th>Task</th>
                                <th>Buyer</th>
                                <th>Worker Count</th>
                                <th>Total Pay</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                mytasks?.map((task, index) =>
                                    <tr >
                                        <th>{index + 1}</th>

                                        <td className='w-[28%] text-start font-medium'>{task.task_title}</td>

                                        <td>{task.buyer_email}</td>

                                        <td>
                                            <div className='flex gap-1 items-center justify-center'>
                                                {task.required_workers}
                                                <img className='w-6 h-6' src={worker} alt="" />
                                            </div>
                                        </td>

                                        <td >
                                            <div className='flex gap-1 items-center justify-center'>
                                                {task.payable_amount * task.required_workers}
                                                <img className='w-6 h-6' src={coin} alt="" />
                                            </div>
                                        </td>

                                        <td><button className='p-1 w-10 text-2xl' onClick={() => deleteAlert(task._id)}><MdDelete className=' hover:text-[#8cbefa]' /></button></td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyTasks;