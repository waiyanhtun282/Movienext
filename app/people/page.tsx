 "use client";
 
import PeopleSLide from '@/components/people/PeopleSLide';
import Card from '../../public/images/card.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PopularTyping } from '@/type';
import peopleRequests, { imagePath } from '@/utils/personRequest';
 const People = () => {
  const [people,setPeople]=useState<PopularTyping[]>([]);
  // const arr = Array(60).fill("");
  const [isHover, setIsHover] = useState(false);
  const fechPersonData= async() =>{
    try {
      const [popular] =await Promise.all([
        fetch(peopleRequests.fetchPopular).then((res) =>res.json())
      ])
      setPeople(popular.results)
    } catch (error:any) {
      console.log(error)
      
    }
  }
  // console.log(people)
  useEffect(() =>{
 fechPersonData();
  },[])
   return (
     <>
    {/* <PeopleSLide  people={people}/>  */}
    <div className=" container mx-auto">
      <div className="py-24">
          <div className=" grid grid-cols-5 gap-3"  >
           { people?.map((item) =>(
          <div className="relative" key={item?.id}  >
              <div className=" " onMouseEnter={()=>setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
               <Image src={imagePath + item?.profile_path} alt={item?.name} width={350} height={350} className=' cursor-pointer z-0' />
               {
                isHover && (
                 <>
                 <div className=" absolute bottom-5 right-8">
                   <p className=' text-white text-[20px] z-30'>{item?.name}</p>
                 </div>
                   <div className=" absolute  w-full h-full bg-gradient-to-t  from-bl_800  to-transparent z-20 top-0 left-0"></div>
                 </>
                )
               }
            </div>
          </div>
           ))}
          </div>
      </div>
    </div>
     </>
   )
 }
 
 export default People
 
