import React from 'react';

import './TestCarousel.css'
import assets from '../../assets/assets';

import 'swiper/css'; // Swiper core styles
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'; // Pagination styles

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


const TestCarousel = () => {
  return (
    <section className="carousel-container">
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
        <SwiperSlide><img src={assets.designer1} alt="Designer 1" /></SwiperSlide>
        <SwiperSlide><img src={assets.designer2} alt="Designer 2" /></SwiperSlide>
        <SwiperSlide><img src={assets.designer3} alt="Designer 3" /></SwiperSlide>
        <SwiperSlide><img src={assets.designer1} alt="Designer 1" /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TestCarousel;

// import React from 'react'
// import { EffectCards } from 'swiper/modules';
// import Swiper from 'swiper/bundle';
// import './TestCarousel.css'
// import 'swiper/css/bundle'

// const TestCarousel = () => {
//   const swiper = new Swiper('.swiper', {
//     modules: EffectCards,
//     autoplay: true,
//     loop: true,
//     direction: 'horizontal',
//     effect: 'cards',
//   })

//   return (
//     <section className='p-8 bg-blue-500 h-screen flex justify-center items-center bg-center w-full bg-cover'>
//       <div className="swiper bg-slate-500 w-3/6 h-3/6">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide flex items-center justify-center text-center  bg-red-500"><img src={assets.designer1} alt="" /></div>
//           <div className="swiper-slide flex items-center justify-center text-center bg-green-500"><img src={assets.designer2} alt="" /></div>
//           <div className="swiper-slide flex items-center justify-center text-center bg-blue-500"><img src={assets.designer3} alt="" /></div>
//           <div className="swiper-slide flex items-center justify-center text-center bg-yellow-500"><img src={assets.designer2} alt="" /></div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TestCarousel
