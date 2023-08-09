"use client";
import Image from "next/image";
import React from "react";
import popuar1 from "../../public/images/card.png";
import { AiFillStar } from "react-icons/ai";
import Marquee from "react-fast-marquee";
const HomePopular = () => {
  const arr = Array(20).fill("");
  return (
    <div className=" container mx-auto">
      <div className="  my-10">
        <h1 className=" text-white font-semibold text-2xl my-5">
          Popular of the week
        </h1>
      
         <Marquee pauseOnHover={true}   gradient={true}  gradientColor={	[0,0 , 6,]} direction="right">
         {arr?.map((a, index) => (
              <div className=" flex items-center gap-2" key={index}>
                <Image src={popuar1} className=" w-[100px]" alt="pupular1" />
                <div className=" space-y-2">
                  <h4 className=" text-gray_100 font-semibold">
                    The latest 
                  </h4>
                  <p className=" text-gray">
                    <span>Horror</span> <span>Action</span>
                  </p>
                  <div className=" flex items-center  gap-1">
                    <AiFillStar className=" text-[gold] text-[18px]" />
                    <p className="text-white">4.3</p>
                    <p className=" text-gray">Movie</p>
                  </div>
                </div>
              </div>
           
          ))}
         </Marquee>
      </div>
    </div>
  );
};

export default HomePopular;
