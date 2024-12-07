import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';

export const Header = () => {
    return (
      <div className='w-[1270px] h-[48px] gap-[239px] bg-[#000000]  text-[#FAFAFA] flex'>
        <div className=' w-[769px] h-[24px]'>
        <p className='flex font-poppins text-center pt-[12px] text-sm w-[798px] h-[18px] font-normal pl-[240px] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className='ml-3 w-[68px] h-[24px] font-poppins font-semibold text-sm underline text-center'>ShopNow</span></p>
        </div>
        <select name="select" id="select" className='bg-black text-[#FAFAFA]  text-center w-[78px] mt-[12px] h-[24px] gap-[5px]'>
            <option value="English">English</option>
        </select>
      </div>
    )
  }
  
  export default Header



export const HHeader = () => {
  return (
    <div className=' border-b-2 border-[#f5f5f58d]'>
    <div className='flex w-[1170px] h-[38px ml-[135px] mt-[88px] gap-[130px]'>
    <h2 className='h-[24px] w-[118px] text-[24px] font-inter font-[700] text-[#000000] 3%'>Exclusive</h2>
      <div>
        <ul className='w-[370px] h-[24px] flex gap-[48px] text-[#000000]'>
          <li className='font-poppins text-[16px] text-center w-[48px] h-[24px] font-normal'><Link href="/">Home</Link></li>
          <li className='font-poppins text-[16px] text-center w-[66px] h-[24px] font-normal'><Link href="/">Contact</Link></li>
          <li className='font-poppins text-[16px] text-center w-[48px] h-[24px] font-normal'><Link href="../About">About </Link></li>
          <li className='font-poppins text-[16px] text-center w-[61px] h-[24px] font-normal'><Link href="../signup">Sign up</Link></li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <button className='flex border-2 border-[#F5F5F5] pl-[20px] pt-[7px] pb-[7px] pr-[12px] bg-[#F5F5F5] gap-[10px] rounded-[428]'><input type="text" placeholder='What are you looking for?'className='w-[130px] h-[38px] text-[12px] font-poppins font-normal opacity-[50%] text-[#000000]' />
        <IoIosSearch className='w-[28px] h-[28px] pl-[4px] pt-[4px]'/></button>
        <FaRegHeart className='h-[28px] w-[28px]'/>
        <MdOutlineShoppingCart className='h-[28px] w-[28px] ' />
        <FaRegUserCircle className='h-[28px] w-[28px]' />
      </div>
    </div>
    </div>
  )
}

