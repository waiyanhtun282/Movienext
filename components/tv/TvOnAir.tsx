"use client";
import Image from "next/image";
import React from "react";
import Trend1 from "../../public/images/card.png";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { trendType } from "./HomeTrending";
import { imagePath } from "@/utils/personRequest";





const TvOnAir = ({movie}:trendType) => {
    // console.log(movie)
    // const arr=Array(20).fill("");
  return (
    <div className=" container mx-auto ">
    <div className=" my-5">
      <h1 className=" font-semibold text-3xl text-white uppercase">Popular THRILLERS</h1>

      <Swiper
        navigation={false}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={6}
        spaceBetween={9}
        grabCursor={true}
        scrollbar={{ draggable: true }}
       
        className="overflow-x-scroll overflow-y-hidden scrollbar-hide"
      >
        {movie?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className=" my-5 overflow-hidden">
              <div className="   relative">
                <Image src={imagePath + item?.poster_path} alt={item?.name || item?.title} width={350} height={350} className=" w-[100%] h-[100%] z-0  cursor-pointer  hover:scale-125 duration-300" />
                <div className=" w-full h-20 bottom-2 left-0 absolute hover:bottom-0 hover:h-full hover:z-20  duration-300 z-10   bg-[#0000007d]"></div>
                <div className=" absolute bottom-2 z-20  left-4">
                  <h4 className=" font-medium text-[18px] text-white">
                    {item?.original_name}
                  </h4>
                  <div className=" flex items-center gap-3">
                    <p className=" flex gap-2 items-center">
                      <AiFillStar className=" text-[gold] text-[18px]" />
                      <span className="text-white">{item?.vote_average}</span>
                    </p>
                    <p className="  text-gray">Action Thrillers</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  )
}

export default TvOnAir;
