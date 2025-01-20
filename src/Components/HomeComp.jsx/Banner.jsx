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

// import required modules
import { Parallax, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import banner1 from '../../assets/banner/network2.jpg'
import lottie from '../../assets/banner/lottie.json'
import lottieani from '../../assets/banner/lottieani1.json'
import girlbanner from '../../assets/banner/girlbanner.jpg'
import boybannner from '../../assets/banner/boybanner.jpg'

import { SlDirection } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Lottie from 'react-lottie';

const Banner = () => {

    return (
        <div>
            <Swiper
                modules={[Parallax, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                // scrollbar={{ draggable: true }}
                parallax={true}
                loop={true}
                onSwiper={(swiper) => { }}
                onSlideChange={() => { }}
                className=''
            >
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-around  md:bg-white p-10'>
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
                        <motion.div animate={{ x: [-40, 0] }} transition={{ duration: 2, delay: 0, ease: 'easeIn' }} className=' my-auto' >
                            
                            <h1 className='text-3xl md:text-5xl font-bold md:w-[90%] lg:w-[70%]'>Unlock Your Earning Potential with Simple Tasks</h1>
                            
                            <p className='text-lg font-medium my-6 md:w-[90%] lg:w-[60%]'>Discover a world of simple tasks that let you earn extra money whenever and wherever you want. Your time, your rules!</p>
                            <Link to={'/auth/register'} className='btn bg-gradient-to-r from-[#aed0fa] to-[#f8cefb] text-xl text-gray-700'>Get Started<SlDirection /></Link>
                        
                        </motion.div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='h-[550px] grid grid-cols-2'>
                    <Lottie className='w-96 mx-auto' 
                    animationData={lottieani} 
                    loop={true}
                    height={400}
                    width={400} />
                        <div>im sana</div>
                    </div>
                </SwiperSlide>
                
                
                <SwiperSlide >
                    <div className=''>
                        <img className='h-[550px] w-full rounded-lg' src={banner1} />
                        <div className='absolute bottom-0 left-0 z-10 hover:bg-black hover:bg-opacity-25 md:pl-16 lg:pl-24 pb-8 p-5'>
                            <h1 className='text-6xl font-semibold'>Oppenheimer</h1>
                            <p className='md:w-[70%] lg:w-[60%] py-4 text-lg font-medium'>A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.</p>
                            <button className='p-2 px-3 text-lg border-2 border-[#ffc107] rounded-md hover:bg-[#ffc107]/20 hover:rounded-2xl mb-10'>Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;