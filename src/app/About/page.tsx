import React from 'react'
import Image from 'next/image'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiGiftFill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { config } from 'process';
 
type pageProps={
  [key:string]:any;
};
const page = () => {
  return ( 
    <div className=' max-w-[1440px] '>
      <div className='ml-[150px] mt-[70px]'>
        <ul className='flex gap-2 w-[114px] h-[24px] '>
          <li className='w-[42px] h-[21px] font-poppins font-normal text-[14px] opacity-[50%]'>Home</li>
          <p>/</p>
          <li className='w-[42px] h-[21px] font-poppins font-normal text-[14px] '>About</li>
        </ul>
      </div>

      <div className='flex max-w-[1440px] w-[1270px] ml-24 '>
        <div className='w-[525px] h-[336px] mt-[50px] pl-[15px] gap-[40px]'>
          <h2 className='w-[277px] h-[64px] font-inter font-semibold mt-[30px] text-[54px] text-left mb-6'>Our Story</h2>
          <p>Launced in 2015, Exclusive is South Asia’s premier online 
            shopping makterplace with an active presense in Bangladesh.
             Supported by wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region</p>
          <br />
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast.
             Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
          <Image src="/about.png" alt="" width={1000} height={1000} className='rounded-[4px] w-[600px] h-[400px] ml-[40px]'/>
        </div>
      </div>
    </div>

  )
  const pageProps:pageProps = {
    page,
    default:()=>{},
    config:{},
}
}

export default page




export const about1 = () => {
  return (
    <div>
    <div className=' ml-[150px]'>
        <div className='w-[1050px] flex h-[230px] mt-6 gap-[30px]'>
          <div className='border-2 space-y-3 border-[#f5f5f57e]  rounded-[4px] w-[230px] h-[200px]'>
        <button className='rounded-full border-4 ml-[36%] mt-10 w-[55px] h-[55px] p-3 border-gray-400'>
          <SiHomeassistantcommunitystore size="28px" className='mb-1 bg-[#FAFAFA] text-[#000000] mr-[10px]' />
        </button>
        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>10.5k</h2>
        <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-[24px] text-center '>Sallers active our site</p>
        </div>
        <div className='border-2 space-y-3 border-[#ee2424fb]  rounded-[4px] w-[230px] h-[200px]'>
        <button className='rounded-full border-4 ml-[36%] mt-10 w-[55px] h-[55px] p-3 border-gray-400'>
          <AiOutlineDollarCircle size="28px" className='mb-1 bg-[#FAFAFA] text-[#000000] mr-[10px]' />
        </button>
        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>10.5k</h2>
        <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-[24px] text-center '>Monthly Produduct Sale</p>
        </div>
        <div className='border-2 space-y-3 border-[#f5f5f57e]  rounded-[4px] w-[230px] h-[200px]'>
        <button className='rounded-full border-4 ml-[36%] mt-10 w-[55px] h-[55px] p-3 border-gray-400'>
          <RiGiftFill size="28px" className='mb-1 bg-[#FAFAFA] text-[#000000] mr-[10px]' />
        </button>
        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>10.5k</h2>
        <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-[24px] text-center '>Customer active in our site</p>
        </div>
        <div className='border-2 space-y-3 border-[#f5f5f57e]  rounded-[4px] w-[230px] h-[200px]'>
        <button className='rounded-full border-4 ml-[36%] mt-10 w-[55px] h-[55px] p-3 border-gray-400'>
          <FaSackDollar size="28px" className='mb-1 bg-[#FAFAFA] text-[#000000] mr-[10px]' />
        </button>
        <h2 className='font-inter font-bold w-[92px] h-[32px] ml-[32%] text-[32px] 4%'>10.5k</h2>
        <p className='font-poppins font-normal ml-[18%] text-[16px] w-[169px] h-[24px] text-center '>Anual gross sale in our site</p>
        </div>
        </div>
      </div>
      </div>
  )
}
