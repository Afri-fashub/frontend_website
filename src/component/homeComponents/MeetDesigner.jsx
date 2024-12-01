import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import assets from '../../assets/assets';


const MeetDesigner = () => {
  return (
    <section className='w-[800px]'>
        {/* <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Enable desired modules
            spaceBetween={30} // Space between slides
            slidesPerView={3} // Show one slide at a time
            navigation // Enable navigation buttons
            pagination={{ clickable: true }} // Enable pagination dots
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
            loop // Enable infinite loop
        >
            {console.log("Swiper is rendering")}
            <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={assets.designer2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={assets.designer3} alt="" /></SwiperSlide>
        </Swiper> */}
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={assets.designer1} alt="" /></SwiperSlide>
      ...
    </Swiper>
    </section>
  )
}

export default MeetDesigner