import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination, A11y, Autoplay } from 'swiper/modules';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('./testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className='max-w-screen-2xl w-[94%] mx-auto my-24'>
            <div className='my-10 text-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Reviews that speaks volumes</h1>
                <p className='text-lg font-medium w-[90%] lg:w-[60%] my-5 mx-auto'>Hear firsthand how our platform has transformed their lives, providing flexibility, financial freedom, and an engaging experience.</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    360: {
                        slidesPerView: 1, // For small devices (screen width >= 360px)
                    },
                    800: {
                        slidesPerView: 3, // For small devices (screen width >= 640px)
                    },
                    
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
                className="mySwiper"
            >

                {
                    testimonials.map(person =>
                        <SwiperSlide key={person.id}>
                            <div className=' md:h-96 lg:h-72 p-1 font-medium border rounded-lg bg-gradient-to-r from-[#abcffb] to-[#fbcfff]'>
                                <div className='bg-white h-full rounded-lg p-4 flex flex-col'>
                                    <div className='flex justify-between '>
                                        <div className='flex gap-2 items-center'>
                                            <img className='rounded-full w-8 h-8 lg:w-14 lg:h-14' src={person.photo_url} alt="" />
                                            <div>
                                                <h3 className='text-lg lg:text-xl font-semibold'>{person.name}</h3>
                                                <p>{person.email}</p>
                                            </div>
                                        </div>
                                        <p className='hidden lg:block'>{person.date}</p>
                                    </div>
                                    <p className='mt-2 lg:mt-6'>{person.testimonial}</p>
<p className='lg:hidden text-end'>- {person.date}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }

                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Testimonials;