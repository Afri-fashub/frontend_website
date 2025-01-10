import React from 'react'
import 'swiper/css'; // Swiper core styles
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'; // Pagination styles
import './MeetDesigner.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import assets from '../../assets/assets';


const MeetDesigner = () => {
  return (
    <section className='px-6 max-w-[1280px] my-0 mx-auto mt-[5rem]'>
      <h2 className='text-3xl font-semibold'>{'Meet The Designers'}</h2>
      <section className="carousel-container mt-[2rem]">
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={3} // Adjusted for visible slides
          centeredSlides={true}
          spaceBetween={0} // Ensures active slide is centered // Adjust space between slides
        >
          <SwiperSlide>
            <img src={assets.designer1} alt="Designer 1" />
            <p className='absolute items-end left-4 bottom-4 bg-white w-[8rem] h-[3rem] flex justify-center items-center'>Vera Wang</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={assets.designer2} alt="Designer 2" />
            <p className='absolute items-end left-4 bottom-4 bg-white w-[8rem] h-[3rem] flex justify-center items-center'>Adaobi Nwankwo</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={assets.designer3} alt="Designer 3" />
            <p className='absolute items-end left-4 bottom-4 bg-white w-[8rem] h-[3rem] flex justify-center items-center'>Sade Adebayo</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={assets.designer1} alt="Designer 1" />
            <p className='absolute items-end left-4 bottom-4 bg-white w-[8rem] h-[3rem] flex justify-center items-center'>Zainab Abubakar</p>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );  
};

export default MeetDesigner