"use client";
import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide1 from "../../public/images/header1.png";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Movie } from "@/type";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);
type homeSideType = {
  id: any;
  poster_path: any;
  title: any;
  release_date: any;
  overview: any;
};
const HomeSLide = ({ movie }: Movie) => {
  // const arr=Array(6).fill("");
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[100vh]"
      >
        {movie?.map((item): any => (
          <SwiperSlide key={item?.id}>
            <div className="w-full h-screen relative">
              <Image
                src={imagePath + item?.poster_path}
                alt={`Slide `}
                quality={100}
                fill
                sizes="100vw"
                className=" z-0   object-cover"
              />
              <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000007d]"></div>
              <div className="z-20 absolute bottom-[16%] left-20">
                <div className="space-y-5  max-w-[45%]">
                  <h1 className="text-4xl font-semibold text-white">
                    {item?.title}
                  </h1>
                  <h3 className="text-gray">{item?.release_date}</h3>
                  <p className="text-gray_100 text-[20px] tracking-wider">
                    {item?.overview.slice(0, 300)}...
                  </p>
                  <div className="flex gap-8">
                    <button className="p-3 bg-red rounded-md flex items-center gap-3 text-white">
                      <AiOutlinePlayCircle className="text-[24px]" />
                      <span className="text-[18px]">Play Now</span>
                    </button>
                    <button className="p-3 bg-bl_700 rounded-md flex items-center gap-3 text-white">
                      <AiOutlinePlayCircle className="text-[24px]" />
                      <span className="text-[18px]">Watch trailer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSLide;

{
  /* <div className=" w-full h-screen relative">
<Image
  src={Slide1}
  alt="slid1"
  className=" w-[100%] h-[100%] z-0 object-cover"
/>
<div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000007d]"></div>
<div className="  z-20 absolute bottom-[20%] left-16">
  <div className=" space-y-5">
    <h1 className=" text-3xl font-medium">Iron Man</h1>
  
      <h3 className=" text-gray">24h40m 2022*fantasny</h3>
    <p className=" text-gray_100 max-w-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
      incidunt! Minima, deleniti enim sint officiis doloremque
      aspernatur aliquam suscipit magni!
    </p>
  <div className=" flex  gap-8">
  <button className=" p-3 bg-green rounded-md  flex items-center gap-3">
      <AiOutlinePlayCircle  className=" text-[24px]"/>
      <span className="text-[18px]">Play Now</span>

    </button>
    <button className=" p-3 bg-bl_700 rounded-md  flex items-center gap-3">
      <AiOutlinePlayCircle  className=" text-[24px]"/>
      <span className="text-[18px]">Watch trailer</span>

    </button>
  </div>
  </div>
</div>
</div> */
}
