import React from 'react';

const AddTask = () => {
  return (
    <div className='p-10'>

      <div className='max-w-screen-xl w-[92%] mx-auto bg-white p-12 my-12 rounded'>
        <form className="card-body grid grid-cols-2">
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
          </div>
          
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-[#97c4fa] to-[#f9c0fe]">Login</button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default AddTask;