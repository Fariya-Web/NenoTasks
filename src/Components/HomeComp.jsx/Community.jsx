import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBookOpen, FaQuestionCircle, FaHeadset } from 'react-icons/fa';

const Community = () => {
    return (
        <section className='w-[96%] max-w-screen-2xl mx-auto my-24 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold'>Join Our Community – Learn & Grow!</h2>
            <p className='text-lg font-medium w-[90%] lg:w-[60%] mx-auto my-4'>
                Connect with fellow taskers, share experiences, and get support from our team.
            </p>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                {/* Forum */}
                <Link to='/forum' className='p-6 border rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center'>
                    <FaUsers className='text-5xl text-blue-500' />
                    <h3 className='text-xl font-semibold mt-4'>Discussion Forum</h3>
                    <p className='text-gray-600 mt-2'>Ask questions and share tips with the community.</p>
                </Link>

                {/* Blog */}
                <Link to='/blog' className='p-6 border rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center'>
                    <FaBookOpen className='text-5xl text-green-500' />
                    <h3 className='text-xl font-semibold mt-4'>Blog & Guides</h3>
                    <p className='text-gray-600 mt-2'>Read success stories and expert tips.</p>
                </Link>

                {/* Help Center */}
                <Link to='/help-center' className='p-6 border rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center'>
                    <FaQuestionCircle className='text-5xl text-yellow-500' />
                    <h3 className='text-xl font-semibold mt-4'>Help Center</h3>
                    <p className='text-gray-600 mt-2'>Find answers to common questions.</p>
                </Link>

                {/* Support */}
                <Link to='/support' className='p-6 border rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center'>
                    <FaHeadset className='text-5xl text-red-500' />
                    <h3 className='text-xl font-semibold mt-4'>Customer Support</h3>
                    <p className='text-gray-600 mt-2'>Need help? Reach out to our support team.</p>
                </Link>
            </div>
        </section>
    );
};

export default Community;