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

    console.log(testimonials);

    return (
        <div className='max-w-screen-2xl mx-auto my-24'>
            <div className='my-10 text-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Reviews that speaks volumes</h1>
                <p className='text-lg font-medium w-[90%] lg:w-[60%] my-5 mx-auto'>Hear firsthand how our platform has transformed their lives, providing flexibility, financial freedom, and an engaging experience.</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'3'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
                className="mySwiper"
            >

                {
                    testimonials.map(person =>
                        <SwiperSlide>
                            <div className='h-72 p-1 font-medium border rounded-lg bg-gradient-to-r from-[#abcffb] to-[#fbcfff]'>
                                <div className='bg-white h-full rounded-lg p-4 flex flex-col'>
                                    <div className='flex justify-between '>
                                        <div className='flex gap-2'>
                                            <img className='rounded-full w-14 h-14' src={person.photo_url} alt="" />
                                            <div>
                                                <h3 className='text-xl font-semibold'>{person.name}</h3>
                                                <p>{person.email}</p>
                                            </div>
                                        </div>
                                        <p className='pb-12'>{person.date}</p>
                                    </div>
                                    <p className='mt-6'>{person.testimonial}</p>

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