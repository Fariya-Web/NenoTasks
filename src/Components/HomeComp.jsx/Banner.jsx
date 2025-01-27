import React from 'react';

// React
import { motion } from "motion/react"

// React Server Components
// import * as motion from "motion/react-client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

// import required modules
import { Parallax, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import lottiework from '../../assets/banner/Animation - 1737397116190.json'
import lottitask from '../../assets/banner/task.json'
import lottichange from '../../assets/banner/exchange.json'
import girlbanner from '../../assets/banner/girlbanner.jpg'
import boybannner from '../../assets/banner/boybanner.jpg'
import lottiebanner1 from '../../assets/banner/Lottie/lottiebanner1.json'

import { SlDirection } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';


const Banner = () => {

    return (
        <div className='bg-base-200 py-10'>
            <Swiper
                modules={[Parallax, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                parallax={true}
                loop={true}
                onSwiper={(swiper) => { }}
                onSlideChange={() => { }}
                className=''
            >


                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-around md:bg-base-200 py-10 w-[94%] max-w-screen-2xl mx-auto'>

                        <div className='relative w-2/3 mx-auto md:hidden'>

                            <img
                                className='w-56 rounded-xl shadow-2xl'
                                src={boybannner} alt="" />

                            <img
                                className='w-56 rounded-xl shadow-2xl absolute -bottom-24 right-0'
                                src={girlbanner} alt="" />

                        </div>

                        <div className='ml-96 hidden md:block lg:ml-0'>

                            <motion.img
                                animate={{ x: [-350, -250, -350] }}
                                transition={{ duration: 10, delay: 0, repeat: Infinity, ease: 'easeOut' }}
                                className='w-20 md:w-96 rounded-xl shadow-2xl'
                                src={boybannner} alt="" />

                            <motion.img
                                animate={{ y: [-150, -50, -150] }}
                                transition={{ duration: 10, delay: 0, repeat: Infinity, ease: 'easeOut' }}
                                className='w-20 md:w-96 rounded-xl shadow-2xl'
                                src={girlbanner} alt="" />

                        </div>

                        <motion.div
                            animate={{ x: [0] }}
                            transition={{ duration: 2, delay: 0, ease: 'easeIn' }} className=' mt-36 md:my-auto ' >

                            <h1 className='text-3xl md:text-5xl font-bold md:w-[90%] lg:w-[60%]'>NanoTasks, Flexibility at Your Fingertips</h1>

                            <p className='text-lg font-medium my-6 md:w-[90%] lg:w-[60%]'>Welcome to a platform where opportunities meet convenience. Start your journey today and make every moment rewarding.</p>
                            <Link to={'/auth/register'} className='btn bg-gradient-to-r from-[#aed0fa] to-[#f8cefb] text-xl text-gray-700'>Get Started<SlDirection /></Link>

                        </motion.div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[650px] lg:h-[550px] grid lg:grid-cols-2 pb-8 max-w-screen-2xl mx-auto'>
                        <Lottie className='w-80 md:w-[760px] mx-auto'
                            animationData={lottiebanner1}
                            loop={true}
                            height={400}
                            width={500} />
                        <div className='w-[94%] md:w-[90%] lg:w-[80%] mx-auto my-auto'>
                            <h1 className='text-3xl md:text-5xl font-bold '>Turn Your Free Time into Income</h1>

                            <p className='text-lg font-medium my-6 '>Discover a world of simple tasks that let you earn extra money whenever and wherever you want. Your time, your rules!</p>
                            <Link to={'/auth/register'} className='btn bg-gradient-to-r from-[#aed0fa] to-[#f8cefb] text-xl text-gray-700'>Get Started<SlDirection /></Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[650px] lg:h-[550px] grid lg:flex flex-row-reverse justify-evenly pb-8 max-w-screen-2xl w-[96%] mx-auto'>
                        <Lottie className='w-72 md:w-[800px] mx-auto'
                            animationData={lottitask}
                            loop={true}
                            height={400}
                            width={400} />
                        <div className='w-[94%] md:w-[90%] lg:w-[44%] mx-auto my-auto'>
                            <h1 className='text-3xl md:text-5xl font-bold '>Unlock Your Earning Potential with Simple Tasks</h1>

                            <p className='text-lg font-medium my-6 '>Discover a world of simple tasks that let you earn extra money whenever and wherever you want. Your time, your rules!</p>
                            <Link to={'/auth/register'} className='btn bg-gradient-to-r from-[#aed0fa] to-[#f8cefb] text-xl text-gray-700'>Get Started<SlDirection /></Link>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='h-[650px] lg:h-[550px] grid lg:grid-cols-2 pb-8 max-w-screen-2xl mx-auto'>
                        <Lottie className='w-72 md:w-[480px] mx-auto'
                            animationData={lottichange}
                            loop={true}
                            height={400}
                            width={400} />
                        <div className='w-[94%] md:w-[90%] lg:w-[80%] mx-auto my-auto'>
                            <h1 className='text-3xl md:text-5xl font-bold '>Cash Out Your Hard-Earned Coins</h1>

                            <p className='text-lg font-medium my-6 '>Your efforts deserve rewards! Easily withdraw the coins you’ve earned and turn them into real money with just a few clicks.</p>
                            <Link to={'/auth/register'} className='btn bg-gradient-to-r from-[#aed0fa] to-[#f8cefb] text-xl text-gray-700'>Get Started<SlDirection /></Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;