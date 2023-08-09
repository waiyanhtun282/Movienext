"use client";
import Slide from "../../public/images/header1.png";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Zoom, Navigation, Pagination } from "swiper/modules";
import { imagePath } from "@/utils/personRequest";
const SecondHomeSlide = ({movieOne,movieTwo}:any) => {
    console.log(movieOne)
  return (
    <div className=" container mx-auto my-10">
      <div className="flex gap-5">
      <div className=" w-[50%]">
      <Swiper
          zoom={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper"
        >
         {
          movieOne?.map((item) =>(
            <SwiperSlide key={item?.id}>
            <div className=" w-[100%] h-[400px] relative">
              <Image
                src={imagePath + item?.poster_path}
                fill
            
                className="w-[100%] h-[100%] object-cover"
                alt={`Slide ${item?.original_title || item?.id}`}
              />
              <div className="  absolute top-0 left-0 w-full h-full bg-[#0000006d]"></div>
              <div className=" space-y-5 absolute top-[30%] left-[8%] z-20 ">
                <h1 className=" text-white text-3xl font-medium">{item?.title}</h1>
                <p className=" text-gray_100 text-[18px] tracking-wider">
                 {item?.overview.slice(0,200)}
                </p>
                <button className=" bg-red p-2 rounded-md flex items-center gap-2">
                  <BsFillPlayFill className="text-white text-[20px]" />
                  <span className=" text-[20px] text-white">Watch Now</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
          ))
         }
        
        </Swiper>
      </div>

    <div className=" w-[50%]">
    <Swiper
          zoom={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper"
        >
         {
          movieTwo?.map((item) =>(
            <SwiperSlide key={item?.id}>
            <div className=" h-[400px] relative">
              <Image
                src={imagePath + item?.poster_path}
                fill
                className="w-[100%] h-[100%] object-cover"
                alt="slide"
              />
              <div className="  absolute top-0 left-0 w-full h-full bg-[#0000006d]"></div>
              <div className=" space-y-5 absolute top-[30%] left-[8%] z-20 ">
                <h1 className=" text-white text-3xl font-medium">{item?.title}</h1>
                <p className=" text-white text-[18px] tracking-wider">
                {item?.overview.slice(0,200)}
                </p>
                <button className=" bg-red p-2 rounded-md flex items-center gap-2">
                  <BsFillPlayFill className="text-white text-[20px]" />
                  <span className=" text-[20px] text-white">Watch Now</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
          ))
         }
       
        </Swiper>
    </div>
      </div>
    </div>
  );
};

export default SecondHomeSlide;
