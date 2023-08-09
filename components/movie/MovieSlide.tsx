"use client";
import React, { FC, useState } from "react";
import Slide from "../../public/images/header1.png";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const MovieSlide: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const arr = Array(6).fill("");
  return (
    <div className=" ">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="w-[100%] h-[100%]"
      >
        <SwiperSlide>
          <div className=" relative">
            <Image
              src={Slide}
              className=" object-cover w-[100%] h-[100%] "
              alt="slide"
            />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000005d]"></div>
            <div className="  absolute z-20 bottom-[30%] left-20">
              <div className=" space-y-5">
                <p className=" text-gray">Exploer By th Genero</p>
                <h1 className=" text-3xl text-white font-semibold">
                  Betmans SuperManr & Dawn Jucice
                </h1>
                <p className=" max-w-xl text-gray_100 text-[18px] tracking-wider">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corporis aliquam deserunt officiis sit culpa ex illum exercitationem itaque reiciendis.
              
                </p>

                <div className=" flex items-center gap-3">
                  <AiFillStar className=" text-[gold] text-[22px]" />
                  <span className=" text-white">3.8</span>
                  <span className=" text-gray">2023 supertime</span>
                </div>

                <div className="flex gap-8">
                  <button className="p-3 bg-red rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Play Now</span>
                  </button>
                  <button className="p-3 border bg-bl_800 border-bl_700 rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Watch trailer</span>
                  </button>
                </div>

              
                 
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
            <Image
              src={Slide}
              className=" object-cover w-[100%] h-[100%] "
              alt="slide"
            />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000005d]"></div>
            <div className="  absolute z-20 bottom-[30%] left-20">
              <div className=" space-y-5">
                <p className=" text-gray">Exploer By th Genero</p>
                <h1 className=" text-3xl text-white font-semibold">
                  Betmans SuperManr & Dawn Jucice
                </h1>
                <p className=" max-w-xl text-gray_100 text-[18px] tracking-wider">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corporis aliquam deserunt officiis sit culpa ex illum exercitationem itaque reiciendis.
              
                </p>

                <div className=" flex items-center gap-3">
                  <AiFillStar className=" text-[gold] text-[22px]" />
                  <span className=" text-white">3.8</span>
                  <span className=" text-gray">2023 supertime</span>
                </div>

                <div className="flex gap-8">
                  <button className="p-3 bg-red rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Play Now</span>
                  </button>
                  <button className="p-3 border bg-bl_800 border-bl_700 rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Watch trailer</span>
                  </button>
                </div>

              
                 
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" relative">
            <Image
              src={Slide}
              className=" object-cover w-[100%] h-[100%] "
              alt="slide"
            />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000005d]"></div>
            <div className="  absolute z-20 bottom-[30%] left-20">
              <div className=" space-y-5">
                <p className=" text-gray">Exploer By th Genero</p>
                <h1 className=" text-3xl text-white font-semibold">
                  Betmans SuperManr & Dawn Jucice
                </h1>
                <p className=" max-w-xl text-gray_100 text-[18px] tracking-wider">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corporis aliquam deserunt officiis sit culpa ex illum exercitationem itaque reiciendis.
              
                </p>

                <div className=" flex items-center gap-3">
                  <AiFillStar className=" text-[gold] text-[22px]" />
                  <span className=" text-white">3.8</span>
                  <span className=" text-gray">2023 supertime</span>
                </div>

                <div className="flex gap-8">
                  <button className="p-3 bg-red rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Play Now</span>
                  </button>
                  <button className="p-3 border bg-bl_800 border-bl_700 rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Watch trailer</span>
                  </button>
                </div>

              
                 
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
            <Image
              src={Slide}
              className=" object-cover w-[100%] h-[100%] "
              alt="slide"
            />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000005d]"></div>
            <div className="  absolute z-20 bottom-[30%] left-20">
              <div className=" space-y-5">
                <p className=" text-gray">Exploer By th Genero</p>
                <h1 className=" text-3xl text-white font-semibold">
                  Betmans SuperManr & Dawn Jucice
                </h1>
                <p className=" max-w-xl text-gray_100 text-[18px] tracking-wider">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corporis aliquam deserunt officiis sit culpa ex illum exercitationem itaque reiciendis.
              
                </p>

                <div className=" flex items-center gap-3">
                  <AiFillStar className=" text-[gold] text-[22px]" />
                  <span className=" text-white">3.8</span>
                  <span className=" text-gray">2023 supertime</span>
                </div>

                <div className="flex gap-8">
                  <button className="p-3 bg-red rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Play Now</span>
                  </button>
                  <button className="p-3 border bg-bl_800 border-bl_700 rounded-md flex items-center gap-3 text-white">
                    <AiOutlinePlayCircle className="text-[24px]" />
                    <span className="text-[18px]">Watch trailer</span>
                  </button>
                </div>

              
                 
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[100%] h-[100%]"
      >
        <SwiperSlide>
        <div className=" relative">
        <Image
            src={Slide}
            className=" object-cover w-[100%] h-[100%]  cursor-pointer hover:opacity-[1] active:opacity-[0.9] focus:opacity-[0.8]  "
            alt="slide"
          />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
        <Image
            src={Slide}
            className=" object-cover w-[100%] h-[100%]  cursor-pointer hover:opacity-[1] active:opacity-[0.9] focus:opacity-[0.8]  "
            alt="slide"
          />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>

        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" relative">
        <Image
            src={Slide}
            className=" object-cover w-[100%] h-[100%]  cursor-pointer hover:opacity-[1] active:opacity-[0.9] focus:opacity-[0.8]  "
            alt="slide"
          />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
        <Image
            src={Slide}
            className=" object-cover w-[100%] h-[100%]  cursor-pointer hover:opacity-[1] active:opacity-[0.9] focus:opacity-[0.8]  "
            alt="slide"
          />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
        <Image
            src={Slide}
            className=" object-cover w-[100%] h-[100%]  cursor-pointer hover:opacity-[1] active:opacity-[0.9] focus:opacity-[0.8]  "
            alt="slide"
          />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>

        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" relative">
        <Image
            src={Slide}
            className=" object-cover w-[100%] h-[100%]  cursor-pointer hover:opacity-[1] active:opacity-[0.9] focus:opacity-[0.8]  "
            alt="slide"
          />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative">
        <Image
            src={Slide}
            className=" object-cover w-[100%] h-[100%]  cursor-pointer hover:opacity-[1] active:opacity-[0.9] focus:opacity-[0.8]  "
            alt="slide"
          />
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>

        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieSlide;
{
  /* <div className="w-full h-full top-0 left-0 absolute z-10 bg-[#0000006d]"></div>*/
}
