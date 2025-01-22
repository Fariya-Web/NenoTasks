import React from 'react';
import useUser from '../../../Hooks/useUser';

const BuyerHome = () => {

    const [dbuser, isLoading] = useUser()
    console.log(dbuser);

    return (
        <div className='py-10 w-[92%]  max-w-screen-xl mx-auto'>
            <div className='py-20 border border-white rounded-lg grid grid-cols-2 bg-gradient-to-br from-[#dce9fb] to-[#fbe4fc] '>

                <div className='text-center border-r-4 border-white'>
                    <img className='rounded-full w-60 h-60 mx-auto' src={dbuser?.photo_url} alt="" />
                    <h2 className='text-4xl font-bold'>{dbuser?.name} <span className='text-lg font-medium'>({dbuser?.role})</span> </h2>
                </div>

                <div className='text-xl font-medium my-auto'>
                    <h2 className='text-3xl font-bold text-center mb-6'>Your Activities</h2>
                    <div className='space-y-2 px-32'>
                        <p>Total Task:</p>
                        <p>Pending Task:</p>
                        <p>Required Workers:</p>
                        <p>Total Payment:</p>

                    </div>
                </div>

            </div>

            {/* table */}
            <div>
                <div className=' bg-white p-12 my-12 rounded'>

                    <div className="overflow-x-auto rounded-xl my-8">
                        <table className="table table-zebra text-center ">
                            {/* head */}
                            <thead className='bg-gradient-to-r from-[#c3deff] to-[#fac8ff] text-lg uppercase font-medium '>
                                <tr className='h-16'>
                                    <th></th>
                                    <th>Task</th>
                                    <th>Worker</th>
                                    <th>Pay amount</th>
                                    <th>Submission</th>
                                    <th>Approve</th>
                                    <th>Reject</th>
                                </tr>
                            </thead>
                            {/* <tbody className='text-lg'>
                                {
                                    mytasks?.map((task, index) =>
                                        <tr >
                                            <th>{index + 1}</th>

                                            <td className='w-[24%] text-start font-medium'>{task.task_title}</td>

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

                                            <td>{task.completion_date}</td>

                                            <td><button className='p-1 w-10 text-2xl' onClick={() => deleteAlert(task._id)}><CiEdit className=' hover:text-[#8cbefa]' /></button></td>

                                            <td><button className='p-1 w-10 text-2xl' onClick={() => deleteAlert(task._id)}><AiOutlineDelete className=' hover:text-[#8cbefa]' /></button></td>

                                        </tr>
                                    )
                                }
                            </tbody> */}
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BuyerHome;