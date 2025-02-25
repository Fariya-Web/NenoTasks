import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import coin from '../../../assets/icons/coin.png'
import { MdDoneOutline } from 'react-icons/md';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useUser from '../../../Hooks/useUser';
import { motion } from 'motion/react';
import { AuthContext } from '../../Provider/AuthProvider';


const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const { user, dark } = useContext(AuthContext)
    const [dbuser] = useUser()

    const { data: stats = {}, isLoading: loading, refetch: statrefetch } = useQuery({
        queryKey: ['stat'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adminStats/${dbuser?.email}`)
            return res.data || {}
        }
    })

    const { data: requests = [], isLoading, refetch } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axiosSecure.get('/withdraws')
            return res.data || []
        }
    })
    if (isLoading || loading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }


    const handleApproved = (req) => {
        Swal.fire({
            title: "Do you want to approve this request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",

            confirmButtonText: "Yes, approve!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/withdraw/${req._id}`)
                    .then(res => {

                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Approved!",
                                text: "This withdrawal request has been approved.",
                                icon: "success"
                            });
                            const notification = {
                                message: `Your withdrawal request for ${req.withdrawal_coin} coins was approved. ${req.withdrawal_amount}$ was sent to your ${req.payment_system} account`,
                                ToEmail: req.worker_email,
                                Time: new Date(),
                            }
                            axiosSecure.post('/notifications', notification)
                                .then(res => { })
                            refetch()
                        }
                    })
            }
        });

    }

    return (
        <div className='min-h-[calc(100vh-370px)] py-10 w-[92%]  max-w-screen-xl mx-auto '>
            <div className='py-20 border border-white rounded-lg grid md:grid-cols-2 dark:border-none bg-gradient-to-br dark:from-[#2c275f] dark:to-[#4a1542] from-[#cae0ff] to-[#fcc3ff] '>

                <div className='text-center border-r-4 dark:border-r-[1px] border-white'>
                    <img className='rounded-full w-60 h-60 mx-auto' src={dbuser?.photo_url} alt="" />
                    <h2 className='text-4xl font-bold'>{dbuser?.name} <span className='text-lg font-medium'>({dbuser?.role})</span> </h2>
                </div>

                <div className='text-xl font-medium my-auto mt-8 md:mt-4'>
                    <h2 className='text-3xl font-bold text-center md:mb-6'>Platform Activities</h2>
                    <div className='space-y-2 px-16 md:px-32 py-6 md:py-12'>
                        <p>Total Buyers: {stats.buyers}</p>
                        <p>Total Workers: {stats.workers}</p>
                        <p className='flex items-center gap-1'>
                            Total Coins: {stats.totalCoins}
                            <img className='w-6 h-6' src={coin} alt="" />
                        </p>

                    </div>
                </div>

            </div>


            <div className='bg-white p-12 my-12 rounded dark:bg-[#271c2d]'>

                <div className="overflow-x-auto rounded-xl my-8">
                    <table className={dark?"table text-center ": "table table-zebra text-center "}>

                        <thead className='dark:text-white bg-gradient-to-r dark:from-[#2c275f] dark:to-[#4a1542] from-[#c3deff] to-[#fac8ff] text-lg uppercase font-medium '>
                            <tr className='h-16 dark:border-b-gray-600'>
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
                                    <tr key={index} className='border-y dark:border-gray-600'>
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

                                        <td><motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.8 }}
                                            className='p-1 w-10 text-2xl' onClick={() => handleApproved(req)}><MdDoneOutline className=' hover:text-[#8cbefa]' /></motion.button></td>

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