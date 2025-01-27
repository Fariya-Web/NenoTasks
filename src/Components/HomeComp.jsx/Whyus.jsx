import React from 'react';

const Whyus = () => {
    return (
        <div className='my-40 grid md:grid-cols-12 gap-8 max-w-screen-2xl mx-auto w-[94%]'>
            <div className='md:col-span-5 my-auto'>
                <h2 className='text-6xl font-bold'>Why Choose, <br /> <span className='bg-gradient-to-r from-[#8cbefa] to-[#f4b4fa] text-transparent bg-clip-text'>NanoTasks</span></h2>
                <p className='text-xl my-6 font-medium'> Our platform is designed with simplicity, flexibility, and trust in mind, making it the perfect place for task creators and earners alike. Whether you're looking to complete micro-tasks during your free time or need reliable taskers to bring your projects to life, NanoTasks has you covered.</p>
            </div>

            <div className='md:col-span-7 grid md:grid-cols-2 grid-rows-2'>
                
                <div className='h-fit border rounded-md p-4 m-2 bg-gray-100/40'>
                    <h3 className='text-3xl font-semibold'>Trusted Platform</h3>
                    <p className='py-2 text-lg'>Built with transparency and security, NanoTasks is a trusted platform connecting task creators and earners worldwide.</p>
                </div>
                
                <div className='row-span-2 border rounded-md p-5 m-2 bg-gradient-to-br from-[#e7f1fe] to-[#fef4ff]'>
                    <h3 className='text-3xl font-semibold'>Flexible Opportunities</h3>
                    <p className='py-5 text-lg'>Work on tasks anytime, anywhere—choose what fits your schedule and lifestyle. Complete micro-tasks during your free time buyers need reliable taskers to bring their projects to life. NanoTasks empowers you to earn on your terms —just opportunities waiting to be unlocked. </p>
                    <button className='p-1 px-4 mx-10 font-semibold text-lg bg-gradient-to-r from-[#aed1fc] to-[#fbdffd] rounded-md'>Get Started</button>
                </div>
                
                <div className='h-fit border rounded-md p-4 m-2 bg-gray-100/40'>
                    <h3 className='text-3xl font-semibold'>Easy to Use</h3>
                    <p className='py-2 text-lg'>Our user-friendly interface makes it simple to find, complete, and manage tasks, even for beginners.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Whyus;