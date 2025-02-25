import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { CiEdit } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { MdDelete, MdPerson } from 'react-icons/md';
import Swal from 'sweetalert2';
import coin from '../../../assets/icons/coin.png'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import worker from '../../../assets/icons/employee.png'
import useUser from '../../../Hooks/useUser';
import { motion } from 'motion/react';
import { AuthContext } from '../../Provider/AuthProvider';

const AllTasks = () => {

    const {dark} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [, , refetchUser] = useUser()

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tasks')
            return res.data || []
        },
    })

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }


    const deleteAlert = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",

            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/task/${id}`)
                    .then(res => {
                       
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This task has been deleted.",
                                icon: "success"
                            });
                            refetch()
                            refetchUser()
                        }
                    })
            }
        });
    }

    return (
        <div className='py-10'>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-white dark:bg-[#271c2d] p-12 my-12 rounded'>

                <div className='flex justify-between uppercase'>
                    <h2 className='text-xl md:text-2xl font-semibold'>Total Tasks: {tasks.length}</h2>
                </div>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table  className={dark?"table text-center ": "table table-zebra text-center "}>
                        {/* head */}
                        <thead className='bg-gradient-to-r dark:text-white dark:from-[#2c275f] dark:to-[#4a1542] from-[#c3deff] to-[#fac8ff] text-lg uppercase font-medium '>
                            <tr className='h-16 dark:border-b-gray-600'>
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
                                Array.isArray(tasks)? 
                                tasks?.map((task, index) =>
                                    <tr key={index} className='border-y dark:border-gray-600'>
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

                                        <td><motion.button 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.8 }}
                                         className='p-1 w-10 text-2xl' onClick={() => deleteAlert(task._id)}><MdDelete className=' hover:text-[#8cbefa]' /></motion.button></td>

                                    </tr>
                                )
                                : []
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllTasks;