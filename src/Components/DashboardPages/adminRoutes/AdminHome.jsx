import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import coin from '../../../assets/icons/coin.png'
import { MdDoneOutline } from 'react-icons/md';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const AdminHome = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: requests = [], isLoading, refetch } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axiosSecure.get('/withdraws')
            return res.data || []
        }
    })
    console.log(requests);

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }

    const pendingReq = Array.isArray(requests) ? requests.filter(req => req.status === 'pending') : []


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
            <div className='p-8 md:p-14 border border-white rounded-lg bg-gradient-to-br from-[#cae0ff] to-[#fcc3ff] text-center'>

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
                                Array.isArray(pendingReq) ?
                                    pendingReq?.map((req, index) =>
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
                                    :
                                    []
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;