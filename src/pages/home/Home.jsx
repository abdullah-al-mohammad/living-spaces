import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css'

import home1 from '../../assets/carousel1.jpg'
import home2 from '../../assets/carousel2.jpg'
import home3 from '../../assets/carousel3.jpg'
import home4 from '../../assets/carousel4.jpg'

// Import Swiper styles
import 'swiper/css';

// import css
import './home.css'
import EstateGallery from '../EstateGallery/EstateGallery';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const swiper = useSwiper();
    const loadData = useLoaderData()

    return (
        <div>
            <div className='bgImg mb-10'>
                <div className='container mx-auto'>
                    <div>
                        <div className='mb-10'>
                            <div className='text-center max-w-xl mx-auto'>
                                <h1 className='text-5xl text-white font-poppins mb-5 text-center md:w-auto'>The Ideal Residential Living Spaces for Privacy and Comfort</h1>
                                <p className='font-poppins text-white'>Single-family homes are residential living spaces designed to accommodate one household. These homes are typically detached, meaning they stand alone without shared walls, offering privacy and personal space. They come in various styles and sizes, from modest cottages to expansive estates. Single-family homes often include amenities such as private yards, garages, and multiple bedrooms and bathrooms, making them ideal for families or individuals seeking more space</p>
                            </div>
                        </div>
                        <div>
                            <Swiper
                            className='mySwiper'
                                modules={[Navigation, Autoplay, Pagination]}
                                spaceBetween={30}
                                pagination={{ clickable: true }}
                                slidesPerView={3}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                  }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide><img src={home1} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={home2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={home3} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={home4} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={home3} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-11 container mx-auto'>
                {
                    loadData.map((data) => <EstateGallery key={data.id} estateData={data}></EstateGallery>)
                }
            </div>
        </div>
    );
};

export default Home;