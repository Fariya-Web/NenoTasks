import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';

const AddTask = () => {

  const {user} = useContext(AuthContext)

  const {
    register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
    const task = {
      ...data,
      buyer_email: user?.email
    }
    console.log(task);
  };

  return (
    <div className='p-10'>

      <div className='max-w-screen-xl w-[92%] mx-auto border-2 border-white bg-gradient-to-br from-[#f1f5fb] to-[#e9f0fb] p-12 my-12 rounded-lg'>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body grid gap-3 grid-cols-2">

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>

            <input
              type="text"
              placeholder="Enter title"
              {...register("task_title")}
              className="input input-bordered" required />

          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Task Details</span>
            </label>

            <input
              type="text"
              placeholder="Enter details"
              {...register("task_detail")}
              className="textarea textarea-bordered pb-9 h-20" required />

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Required Workers</span>
            </label>

            <input
              type="number"
              placeholder="Enter worker count"
              {...register("required_workers")}
              className="input input-bordered" required />

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Payable Amount</span>
            </label>

            <input
              type="number"
              placeholder="Enter payable amount"
              {...register("payable_amount")}
              className="input input-bordered" required />

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>

            <input
              type="date"
              placeholder="Enter deadline"
              {...register("completion_date")}
              className="input input-bordered" required />

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Image</span>
            </label>

            <input
              type="file"
              {...register("task_image_url")}
              className='file-input file-input-ghost file-input-bordered w-full bg-white mx-auto' required />

          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Submission information</span>
            </label>

            <input
              type="text"
              placeholder="Enter submission requirements"
              {...register("task_detail")}
              className="textarea textarea-bordered pb-9 h-20" required />

          </div>

          <div className="form-control mt-6 col-span-2">
            <button className="btn bg-gradient-to-r from-[#97c4fa] to-[#f9c0fe]">Login</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AddTask;