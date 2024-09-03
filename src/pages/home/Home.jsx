import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import Navbar from '../../navigation/Navbar';

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
                <Navbar></Navbar>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-12'>
                        <div className='my-8 md:my-0 col-span-2'>
                            <div className='text-center'>
                                <h1 className='text-5xl text-white font-poppins mb-5 text-center md:w-auto'>The Ideal Residential Living Spaces for Privacy and Comfort</h1>
                                <p className='font-poppins'>Single-family homes are residential living spaces designed to accommodate one household. These homes are typically detached, meaning they stand alone without shared walls, offering privacy and personal space. They come in various styles and sizes, from modest cottages to expansive estates. Single-family homes often include amenities such as private yards, garages, and multiple bedrooms and bathrooms, making them ideal for families or individuals seeking more space</p>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide><img src={home1} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={home2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={home3} alt="" /></SwiperSlide>
                                <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 container mx-auto'>
                {
                    loadData.map((data) => <EstateGallery key={data.id} estateData={data}></EstateGallery>)
                }
            </div>
        </div>
    );
};

export default Home;