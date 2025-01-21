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

    const handleRoleChange = async (user, id, newRole) => {
        const result = await Swal.fire({
            title: "Are you sure you want to change this user's role?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",
            confirmButtonText: "Yes, change"
        });
        
        if (result.isConfirmed) {

            try {
                const res = await axiosSecure.patch(`/users/${id}`, { role: newRole });
            
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user?.name} is now a ${newRole}.`,
                        icon: "success"
                    });
                    refetch();
                }
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update user role.",
                    icon: "error"
                });
                console.error(error);
            }
        }
    };

    const deleteAlert = (id) => {
        Swal.fire({
            title: "Are you sure you want to remove this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",

            confirmButtonText: "Yes, remove"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {

                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This user has been removed.",
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
                                <th>Change</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                users?.map((user, index) =>
                                    <tr >
                                        <th>{index + 1}</th>

                                        <td>
                                            <img className='w-14 h-16 mx-auto rounded-2xl' src={user?.photo_url} alt="" />
                                        </td>

                                        <td className='font-medium'>{user?.name}</td>

                                        <td>{user?.email}</td>

                                        <td>
                                            <div className='flex gap-1 items-center justify-center'>
                                                {user?.coin}
                                                <img className='w-6 h-6' src={coinicon} alt="" />
                                            </div>
                                        </td>

                                        <td className=''>
                                            {
                                                user?.role == 'worker' ?
                                                    <div className='flex gap-1 items-center justify-center'>Worker <img className='w-6 h-6' src={worker} alt="" /></div>
                                                    :
                                                    <div className='flex gap-1 items-center justify-center'>Buyer <img className='w-6 h-6' src={buyer} alt="" /></div>

                                            }
                                        </td>


                                        <td>
                                            <select
                                                defaultValue={user?.role}
                                                onChange={(e) => handleRoleChange(user, user?._id, e.target.value)}
                                                className="p-1 my-3 rounded-md shadow-md"
                                            >
                                                <option disabled={user?.role == 'buyer'} value="buyer">Buyer</option>
                                                <option disabled={user?.role == 'worker'} value="worker">Worker</option>
                                                <option disabled={user?.role == 'admin'} value="admin">Admin</option>
                                            </select>
                                        </td>

                                        <td><button className='p-1 w-10 text-2xl' onClick={() => deleteAlert(user?._id)}><MdDelete className=' hover:text-[#8cbefa]' /></button></td>

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