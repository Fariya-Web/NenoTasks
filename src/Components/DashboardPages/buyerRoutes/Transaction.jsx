import React from 'react';

const Transaction = () => {
    return (
        <div className='min-h-[calc(100vh-370px)] py-10'>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-white p-12 my-12 rounded'>

                {/* <div className='flex justify-between uppercase'>
                    <h2 className='text-xl md:text-2xl font-semibold'>Total Tasks: {mytasks.length}</h2>
                </div> */}

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className="table table-zebra text-center ">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-[#c3deff] to-[#fac8ff] text-lg uppercase font-medium '>
                            <tr className='h-16'>
                                <th></th>
                                <th>Payment</th>
                                <th>Coins Recived</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {/* {
                                transactions?.map((tran, index) =>
                                    <tr key={index}>
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
                            } */}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default Transaction;