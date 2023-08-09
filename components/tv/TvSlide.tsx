"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlinePlayCircle } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { imagePath } from "@/utils/personRequest";

const TvSlide = ({movie}:any) => {
  // console.log(movie);
  return (
   
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
       {
        movie?.map((item):any =>(
          <SwiperSlide key={item?.id}>
          <div className=" relative">
         <div className="">
         <Image
              src={imagePath + item?.backdrop_path }
              alt={item.title}
              // fill
              // priority={true}
              width={800}
              height={950}
              //  sizes="100vw"
              objectFit="cover"
              className="w-[100%]  -z-10"
            />
         </div>
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000009d]"></div>
            {/* slide */}
            <div className=" absolute z-30 top-[20%] left-0">
              <div className=" container mx-auto ">
                <div className=" flex  gap-5 items-center">
                  <div className=" space-y-8 w-6/12  overflow-auto">
                    <h1 className=" text-white text-4xl font-semibold max-w-lg">
                     {item?.original_name} 
                    </h1>
                    <p className=" text-gray_100 tracking-wider text-[18px]  text-justify ">
                     {item?.overview.slice(0,350)}...
                    </p>
                    <div className="flex gap-8 ">
                      <button className="p-4 bg-red rounded-md flex items-center gap-3 text-white">
                        <AiOutlinePlayCircle className="text-[24px]" />
                        <span className="text-[18px]">Watch Now</span>
                      </button>
                      <button className="p-4 bg-bl_700 rounded-md flex items-center gap-3 text-white">
                        <AiOutlinePlayCircle className="text-[24px]" />
                        <span className="text-[18px]">Watch trailer</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <div className=" w-7/12  h-auto">
                      <Image
                        src={imagePath + item?.poster_path}
                        alt="slide small"
                        // layout="fill"
                        objectFit="cover"
                        width={350}
                        height={350}
                      
                        className="   rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))
       }
      </Swiper>
    
  );
};

export default TvSlide;
     {/*  <SwiperSlide>
          <div className=" relative">
            <Image
              src={SLide1}
              alt="slide1"
              className="w-[100%] h-[100%] object-cover -z-10"
            />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>
            {/* slide 
            <div className=" absolute z-30 top-[20%] left-0">
              <div className=" container mx-auto ">
                <div className=" flex  gap-5 items-center">
                  <div className=" space-y-8 w-6/12  overflow-auto">
                    <h1 className=" text-white text-4xl font-semibold ">
                      Avantar && Superman
                    </h1>
                    <p className=" text-gray_100 tracking-wider text-[18px]  text-justify ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorum nesciunt reprehenderit odit rem minima aut ex quod
                      fugiat saepe veritatis?
                    </p>
                    <div className="flex gap-8 ">
                      <button className="p-4 bg-red rounded-md flex items-center gap-3 text-white">
                        <AiOutlinePlayCircle className="text-[24px]" />
                        <span className="text-[18px]">Watch Now</span>
                      </button>
                      <button className="p-4 bg-bl_700 rounded-md flex items-center gap-3 text-white">
                        <AiOutlinePlayCircle className="text-[24px]" />
                        <span className="text-[18px]">Watch trailer</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <div className=" w-7/12  h-auto">
                      <Image
                        src={Card1}
                        alt="slide small"
                        className=" w-[100%] h-[100%]   object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> **/}
