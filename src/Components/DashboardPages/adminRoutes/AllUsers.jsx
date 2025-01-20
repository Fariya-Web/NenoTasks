import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import coinicon from '../../../assets/icons/coin.png'
import worker from '../../../assets/icons/employee.png'
import buyer from '../../../assets/icons/business-women.png'
import Swal from 'sweetalert2';
import { MdDelete } from 'react-icons/md';


const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })


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
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This task has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div className='py-10'>

            <div className='max-w-screen-xl w-[92%] mx-auto bg-white p-12 my-12 rounded'>

                <div className='flex justify-between uppercase'>
                    {/* <h2 className='text-xl md:text-2xl font-semibold'>Total Tasks: {users.length}</h2> */}
                </div>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className="table table-zebra text-center ">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-[#c3deff] to-[#fac8ff] text-lg uppercase font-medium '>
                            <tr className='h-16'>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Coin</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                users?.map((user, index) =>
                                    <tr >
                                        <th>{index + 1}</th>

                                        <td>
                                            <img className='w-14 h-16 mx-auto rounded-2xl' src={user.photo_url} alt="" />
                                        </td>
                                        
                                        <td className='font-medium'>{user.name}</td>

                                        <td>{user.email}</td>

                                        <td>
                                            <div className='flex gap-1 items-center justify-center'>
                                                {user.coin}
                                                <img className='w-6 h-6' src={coinicon} alt="" />
                                            </div>
                                        </td>

                                        <td className=''>
                                            {
                                                user?.role == 'worker'? 
                                                <div className='flex gap-1 items-center justify-center'>Worker <img className='w-6 h-6' src={worker} alt="" /></div>
                                                :
                                                <div className='flex gap-1 items-center justify-center'>Buyer <img className='w-6 h-6' src={buyer} alt="" /></div>

                                            }
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

export default AllUsers;