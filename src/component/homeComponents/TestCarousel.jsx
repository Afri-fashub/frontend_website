import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './TestCarousel.css'
import assets from '../../assets/assets';

const TestCarousel = () => {
  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3} // Show 3 slides at once
        centeredSlides={true} // Center the active slide
        spaceBetween={20} // Space between slides
        loop={true} // Infinite looping
        navigation // Enable navigation arrows
        // className='h-[600px]'
      >
          <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestCarousel;
