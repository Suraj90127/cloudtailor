import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Swipers() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          
                <div className='first-img'>
                <img src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fdcadnwa7434iu.cloudfront.net%2Fbanner%2Ffashion-expert-1900.webp&w=1200&q=75" alt="url error" />
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fdcadnwa7434iu.cloudfront.net%2Fbanner%2Ffashion-made-easy-1900.webp&w=1200&q=75" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fdcadnwa7434iu.cloudfront.net%2Fbanner%2Ffashion-mega-mania-1900.webp&w=1200&q=75" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <img src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fdcadnwa7434iu.cloudfront.net%2Fbanner%2Ftailored-to-perfection-everytime-1900.webp&w=1200&q=75" alt="" />
            </div>
        </SwiperSlide>
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </>
  );
}
