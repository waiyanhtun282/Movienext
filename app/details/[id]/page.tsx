import React from 'react';
import Deatail1 from  "../../../public/images/header1.png";
import Card1 from "../../../public/images/card.png";
import Image from 'next/image';
const DetailPage = () => {
   
  return (
    <div className=' relative w-full h-full overflow-visible'>
          <div className="">
              <Image  src={Deatail1} alt='background image' objectFit='cover' className='w-[100%] h-[100%]'/>
              <div className=" overflow-x-hidden">
              <div className="absolute bg-[#222222] w-full  top-[40%] left-0 h-[100%]   ">
                <div className=" container mx-auto">
                   <div className=" flex">
                     <Image  src={Card1} alt='card1'   className=' w-5/12 h-[25%] -mt-40'/>
                     <div className=" w-7/12 border-2 border-white -mt-40">
                        <h1 className=' text-white'>Ironman</h1>
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus cum, dolorum soluta repudiandae incidunt non mollitia illo odio quo?
                        </p>
                     </div>
                   </div>
                </div>
            </div>
              </div>
              </div>
        
    
    </div>
  )
}

export default DetailPage
