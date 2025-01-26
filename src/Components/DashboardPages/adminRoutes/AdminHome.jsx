import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import coin from '../../../assets/icons/coin.png'
import { MdDoneOutline } from 'react-icons/md';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useUser from '../../../Hooks/useUser';


const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [dbuser] = useUser()

    const { data: stats = {}, isLoading: loading, refetch: statrefetch } = useQuery({
        queryKey: ['stat'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adminStats/${dbuser?.email}`)
            return res.data || {}
        }
    })
    console.log(stats);
    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }

    const { data: requests = [], isLoading, refetch } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axiosSecure.get('/withdraws')
            return res.data || []
        }
    })
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }


    const handleApproved = (id) => {
        console.log(id);
        Swal.fire({
            title: "Do you want to approve this request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",

            confirmButtonText: "Yes, approve!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/withdraw/${id}`)
                    .then(res => {

                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Approved!",
                                text: "This withdrawal request has been approved.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });

    }

    return (
        <div className='min-h-[calc(100vh-370px)] py-10 w-[92%]  max-w-screen-xl mx-auto '>
            <div className='py-20 border border-white rounded-lg grid grid-cols-2 bg-gradient-to-br from-[#cae0ff] to-[#fcc3ff] '>

                <div className='text-center border-r-4 border-white'>
                    <img className='rounded-full w-60 h-60 mx-auto' src={dbuser?.photo_url} alt="" />
                    <h2 className='text-4xl font-bold'>{dbuser?.name} <span className='text-lg font-medium'>({dbuser?.role})</span> </h2>
                </div>

                <div className='text-xl font-medium my-auto'>
                    <h2 className='text-3xl font-bold text-center mb-6'>Platform Activities</h2>
                    <div className='space-y-2 px-32 py-12'>
                        <p>Total Buyers: {stats.buyers}</p>
                        <p>Total Workers: {stats.workers}</p>
                        <p className='flex items-center gap-1'>
                            Total Coins: {stats.totalCoins}
                            <img className='w-6 h-6' src={coin} alt="" />
                            </p>

                    </div>
                </div>

            </div>


            <div className='bg-white p-12 my-12 rounded'>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className="table table-zebra text-center ">

                        <thead className='bg-gradient-to-r from-[#c3deff] to-[#fac8ff] text-lg uppercase font-medium '>
                            <tr className='h-16'>
                                <th></th>
                                <th>Worker Name</th>
                                <th>Withdrawal Coins</th>
                                <th>Withdrawal Amount</th>
                                <th>Request Date</th>
                                <th>Approve</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            {
                                requests?.map((req, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>

                                        <td className='font-medium'>{req.worker_name}</td>

                                        <td>
                                            <div className='flex gap-1 items-center justify-center'>
                                                {req.withdrawal_coin}
                                                <img className='w-6 h-6' src={coin} alt="" />
                                            </div>
                                        </td>

                                        <td >
                                            <div className='flex gap-1 items-center justify-center'>
                                                {req.withdrawal_amount} $
                                            </div>
                                        </td>

                                        <td>{format(req.withdraw_date, 'dd-MM-yyyy')}</td>

                                        <td><button className='p-1 w-10 text-2xl' onClick={() => handleApproved(req._id)}><MdDoneOutline className=' hover:text-[#8cbefa]' /></button></td>

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

export default AdminHome;