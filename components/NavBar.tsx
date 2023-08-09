// import React from 'react'
import Link from 'next/link';
import {BsSearch} from 'react-icons/bs';
const NavBar = () => {
  return (
    <div className=' text-white container mx-auto py-5  absolute top-0 left-0 z-20'>
      <div className=" grid grid-cols-3">
      <h1 className=' text-2xl font-bold'>Sein Stream</h1>
        <div className=" my-auto">
          <ul className=' flex justify-between  '>
           <Link href={'/'}>
           <li className=' cursor-pointer text-[18px] font-semibold text-rose'>Home</li>
           </Link>
        <Link href={'/tv'}>
        <li className=' cursor-pointer text-[18px] font-semibold text-white'>TVShows</li>
        </Link>
         <Link href={'/movie'}>
            <li className=' cursor-pointer text-[18px] font-semibold text-white'>Movie</li>
         </Link>
          <Link href={'/people'}>
          <li className=' cursor-pointer text-[18px] font-semibold text-white'>People</li>
          </Link>
            <li className=' cursor-pointer text-[18px] font-semibold text-white'>Profile</li>
          </ul>
        </div>
        <div className=" flex justify-end " >
       <div className="relative">
       <input type="text" className=" outline-none p-2 bg-white  bg-opacity-30 rounded-md  placeholder-white" placeholder="Search" />
          <BsSearch size={20}  className=" text-white absolute  top-2 right-2 "/>
       </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
