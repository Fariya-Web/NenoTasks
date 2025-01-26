import React, { useState } from 'react';
import useUser from '../../../Hooks/useUser';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import coin from '../../../assets/icons/coin.png'
import worker from '../../../assets/icons/employee.png'
import { MdDoneOutline } from "react-icons/md";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { format } from 'date-fns';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BuyerHome = () => {

    const [showmodal, setShowmodal] = useState(false)
    const [dbuser] = useUser()
    console.log(dbuser);
    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

 
    const { data: stats = {}, refetch: statrefetch } = useQuery({
        queryKey: ['stat'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/buyerStats/${dbuser?.email}`)
            return res.data || {}
        }
    })
    console.log(stats)

    const { data: submissions = [], isLoading, refetch } = useQuery({
        queryKey: ['submission'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/submission/${dbuser?.email}`)
            return res.data || []
        }
    })

    const pendings = Array.isArray(submissions) ? submissions.filter(submission => submission?.status == 'pending') : []

    const handleShow = () => {
        setShowmodal(true)
    }

    const handleApproved = (id) => {
        Swal.fire({
            title: "Do you want to approve this submission?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",

            confirmButtonText: "Yes, approve!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/submit/${id}`)
                    .then(res => {

                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Approved!",
                                text: "This submission has been approved.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    const handleReject = (id) => {
        Swal.fire({
            title: "Do you want to reject this submission?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",

            confirmButtonText: "Yes, reject!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/submitR/${id}`)
                    .then(res => {

                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Rejected!",
                                text: "This submission has been rejected.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }


    return (
        <div className='py-10 w-[92%]  max-w-screen-xl mx-auto relative'>
            <div className='py-20 border border-white rounded-lg grid grid-cols-2 bg-gradient-to-br from-[#cae0ff] to-[#fcc3ff] '>

                <div className='text-center border-r-4 border-white'>
                    <img className='rounded-full w-60 h-60 mx-auto' src={dbuser?.photo_url} alt="" />
                    <h2 className='text-4xl font-bold'>{dbuser?.name} <span className='text-lg font-medium'>({dbuser?.role})</span> </h2>
                </div>

                <div className='text-xl font-medium my-auto'>
                    <h2 className='text-3xl font-bold text-center mb-6'>Your Activities</h2>
                    <div className='space-y-2 px-32 py-12'>
                        <p>Total Task: {stats.tasks}</p>
                        <p>Pending Work: {stats.totalPendingTasks}</p>
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
                            <tbody className='text-lg'>
                                {
                                    pendings?.map((task, index) =>
                                        <tr >
                                            <th>{index + 1}</th>

                                            <td className='w-[24%] text-start font-medium'>{task.task_title}</td>

                                            <td>
                                                <div className='flex gap-1 items-center justify-center'>
                                                    {task.worker_name}
                                                    <img className='w-6 h-6' src={worker} alt="" />
                                                </div>
                                            </td>

                                            <td >
                                                <div className='flex gap-1 items-center justify-center'>
                                                    {task.payable_amount}
                                                    <img className='w-6 h-6' src={coin} alt="" />
                                                </div>
                                            </td>

                                            <td>
                                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                                <button
                                                    // onClick={setShowmodal(true)}
                                                    className='btn bg-gradient-to-r from-[#97c4fa] to-[#f9c0fe]'
                                                >View</button>

                                                {/* <div className={showmodal?'absolute p-3 bg-blue-400' : 'hidden'}>
                                                    <h3 className='text-2xl font-bold'>
                                                    {task.task_title}
                                                    </h3>
                                                    <button className='btn' onClick={setShowmodal(false)}>close</button>
                                                </div> */}

                                                {/* <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            {task.task_title}
                                                        </Typography>
                                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                        </Typography>
                                                    </Box>
                                                </Modal> */}

                                                {/* <dialog id="my_modal_2" className="modal">
                                                    <div className="modal-box p-8 text-start text-xl space-y-2 font-semibold">

                                                        <h3 className="font-bold mb-6 text-2xl  text-center">{task.task_title}</h3>
                                                        <p>Worker Name: <span className='font-normal'>{task.worker_name}</span></p>
                                                        <p>Submission Details: <span className='font-normal'>{task.submission_Details}</span></p>
                                                        <p>Submission Date: <span className='font-normal'>{format(task.current_date, 'dd-MM-yyyy , hh:mm:ss')}</span></p>
                                                    </div>
                                                    <form method="dialog" className="modal-backdrop">
                                                        <button>close</button>
                                                    </form>
                                                </dialog> */}

                                            </td>

                                            <td><button className='p-1 w-10 text-2xl' onClick={() => handleApproved(task._id)}><MdDoneOutline className=' hover:text-[#8cbefa]' /></button></td>

                                            <td><button className='p-1 w-10 text-3xl' onClick={() => handleReject(task._id)}><HiOutlineArchiveBoxXMark className=' hover:text-[#8cbefa]' /></button></td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BuyerHome;