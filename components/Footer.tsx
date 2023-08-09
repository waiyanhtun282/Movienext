// import React from "react";
import  {TfiWorld} from 'react-icons/tfi';

const Footer = () => {
  return (
     <div className="  z-30  relative">
        <div className="  shadow-md py-8">
    <div className=" text-white container mx-auto">
        
        <div className=" grid  grid-cols-4">
          {/* first lists */}
          <div className=" flex justify-center">
            <ul className=' space-y-3'>
              <li className=' text-gray'>FAQ</li>
              <li className=' text-gray'>Help Center</li>
              <li className=' text-gray'>Account</li>
              <li className=' text-gray'>Media Center</li>
              <li>
                <button className=' py-5 px-6 border border-gray  flex items-center gap-5 rounded-sm'>
                  <TfiWorld  size={22}/>
                  <span className=' text-[18px] text-gray'>English</span>
                </button>
              </li>
            </ul>
          </div>

          <div className=" flex justify-center">
           <ul className='space-y-3'>
           
           <li className=' text-gray'>Investor Relations</li>
              <li className=' text-gray'>Jobs</li>
              <li className=' text-gray'>Ways To Watch</li>
              <li className=' text-gray'>Terms of Use</li>
            </ul>
          </div>


          <div className=" flex justify-center">
          <ul className='space-y-3'>
           
           <li className=' text-gray'>Privacy</li>
              <li className=' text-gray'>Cookies Preference</li>
              <li className=' text-gray'>Coporatae information</li>
              <li className=' text-gray'>Contact Us</li>
            </ul>
          </div>

          <div className="flex justify-center ">
          <ul className='space-y-3'>
           
           <li className=' text-gray'>Speed Test</li>
              <li className=' text-gray'>Legal Notices</li>
              <li className=' text-gray'>Only on Movie app</li>
              
            </ul>
          </div>
        </div>
     
    </div>
 </div>
     </div>
  );
};

export default Footer;
