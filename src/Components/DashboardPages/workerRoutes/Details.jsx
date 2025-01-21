import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import coin from '../../../assets/icons/coin.png'
import worker from '../../../assets/icons/employee.png'
import deadline from '../../../assets/icons/schedule.png'
import buyer from '../../../assets/icons/business-women.png'
import email from '../../../assets/icons/gmail.png'
import pin from '../../../assets/icons/pin.png'
import requirement from '../../../assets/logo/parchment.png'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const Details = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { data: task, isLoading } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/task/${id}`)
            return res.data
        }
    })
    console.log(task);


    const onSubmit = async (data) => {

        Swal.fire({
            title: "Did you duble check your submission?",
            text: "You won't be able to change this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8cbefa",
           
            confirmButtonText: "Yes, submit!"
        }).then((result) => {
            if (result.isConfirmed) {

                const submitinfo = {
                    ...data,
                    
                }
                console.log(data);
                Swal.fire({
                    title: "Submitted!",
                    text: "Your task has been submitted.",
                    icon: "success"
                });
            }
        });
    }



    return (
        <div className='py-10 w-[92%]  max-w-screen-xl mx-auto'>
            <div className='p-4 border border-white rounded-lg grid gap-5 md:grid-cols-2 bg-gradient-to-br from-[#dce9fb] to-[#fbe4fc] '>
                <img className='rounded-md' src={task?.task_image_url} alt="" />
                <div>
                    <h2 className='text-4xl font-bold'>{task?.task_title}</h2>

                    <div className='flex gap-3 my-3'>
                        <img className='w-10 py-3' src={requirement} alt="" />
                        <p className='text-xl my-3'>{task?.task_detail}</p>
                    </div>


                    <div className='text-xl font-medium space-y-2'>

                        <li className='flex items-center gap-2'>
                            Pay Ammount: {task?.payable_amount}
                            <img className='w-7 h-7' src={coin} alt="" />
                        </li>

                        <li className='flex items-center gap-2'>
                            Required Workers: {task?.required_workers}
                            <img className='w-7 h-7' src={worker} alt="" />
                        </li>

                        <li className='flex items-center gap-2'>
                            Deadline: {task?.completion_date}
                            <img className='w-7 h-7' src={deadline} alt="" />
                        </li>

                        <li className='flex items-center gap-2'>
                            Buyer Name: {task?.buyer_name}
                            <img className='w-7 h-7' src={buyer} alt="" />
                        </li>

                        <li className='flex items-center gap-3'>
                            Buyer Name: {task?.buyer_email}
                            <img className='w-6 h-6' src={email} alt="" />
                        </li>
                    </div>

                    <p className='text-xl my-4 flex gap-3 items-center'>
                        <img className='w-6 h-6' src={pin} alt="" />
                        <span className='font-semibold underline underline-offset-2'>What to submit</span> - {task?.submission_info}</p>
                </div>
            </div>

            {/* form */}
            <div className='bg-white my-12 p-6 lg:p-12 rounded-lg'>
                <h2 className='text-3xl font-semibold'>Submission form -</h2>
                {/* title */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text text-lg">Submission Details</span>
                        </label>

                        <input
                            type="text"
                            placeholder="Enter submission details"
                            {...register("submission_Details")}
                            className="textarea textarea-bordered h-32" required />
                    </div>

                    <div className="form-control mt-4 md:col-span-2 flex items-end">
                        <button className="btn w-48 bg-gradient-to-r from-[#97c4fa] to-[#f9c0fe]">Submit</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Details;