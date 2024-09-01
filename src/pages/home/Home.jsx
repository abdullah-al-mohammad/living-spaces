import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-3xl text-white font-poppins'>The Ideal Residential Living Spaces for Privacy and Comfort</h1>
                        <p>Single-family homes are residential living spaces designed to accommodate one household. These homes are typically detached, meaning they stand alone without shared walls, offering privacy and personal space. They come in various styles and sizes, from modest cottages to expansive estates. Single-family homes often include amenities such as private yards, garages, and multiple bedrooms and bathrooms, making them ideal for families or individuals seeking more space</p>
                    </div>
                </div>
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;