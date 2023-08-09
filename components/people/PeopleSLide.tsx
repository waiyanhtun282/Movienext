"use client";
import React from 'react'
import Slide2  from '../../public/images/header1.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

import '@/styles/swiper.css';
import { imagePath } from '@/utils/personRequest';
const PeopleSLide = ({people}) => {
  console.log(people)
    const arr =Array(100).fill("");
  return (
    <>
      <Swiper
      spaceBetween={30}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 40,
          stretch:0,
          depth: 550,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            people?.map((item) =>(
                <SwiperSlide key={item?.id}>
                <div className=" h-[50%] ">
                 <Image src={imagePath + item?.profile_path} alt={item?.name} width={100} height={100}  objectFit='cover' className=' w-[100%] h-[100%]'  />
                </div>
             </SwiperSlide>
            ))
        }

        {/* <SwiperSlide>
           <div className="">
            <Image src={Slide2} alt='peopel1'  />
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="">
            <Image src={Slide2} alt='peopel1'  />
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="">
            <Image src={Slide2} alt='peopel1'  />
           </div>
        </SwiperSlide> */}
        </Swiper>  
    </>
  )
}

export default PeopleSLide
