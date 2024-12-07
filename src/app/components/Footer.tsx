import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import Image from 'next/image';
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='w-[1270px] h-[440px] flex justify-evenly pt-[10%] bg-[#000000] '>
        <div>
        <h2 className='h-[24px] w-[118px] mb-4 font-inter font-[700] text-[#FAFAFA] text-[24px] 3%'>Exclusive</h2>
        <h2 className='w-[101px] h-[28px] mb-3 font-poppins font-[500] text-[20px] text-[#FAFAFA]'>Subscribe</h2>
        <p className='font-poppins text-[16px] mb-3 font-normal w-[206px] h-[24px] text-[#FAFAFA]'>Get 10% off your first order</p>
        <button className='flex bg-[#000000]   w-[217px]  h-[48px] text-[#FAFAFA] gap-[20px] pl-[16px] pt-[12px] pb-[12px] border-[1.5px] rounded-[4px] '><input type="text" placeholder='Enter your email' className='bg-[#000000] text-[#FAFAFA] w-[150px] ' /><LuSendHorizontal className='w-[20px] h-[18px] mt-1 text-[#FAFAFA]' />
        </button>
        </div>
        <div>
            <h2 className='w-[81px] h-[28px] font-poppins mb-4 font- text-[20px] text-[#FAFAFA] font-[500]'>Support</h2>
            <p className='w-[175px] h-[48px] font-poppins mb-3  text-[16px] font-normal text-[#FAFAFA]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>exclusive@gmail.com</p>
            <p className='w-[175px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>+88015-88888-9999</p>
        </div>
        <div>
        <h2 className='w-[85px] h-[28px] font-poppins mb-4 font- text-[20px] text-[#FAFAFA] font-[500]'>Account</h2>
        <p className='w-[94px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>My Account</p>
        <p className='w-[123px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Login / Register</p>
        <p className='w-[35px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Cart</p>
        <p className='w-[6px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Wishlist</p>
        <p className='w-[41px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Shop</p>
        
        </div>
        <div>
        <h2 className='w-[101px] h-[28px] font-poppins mb-4 font- text-[20px] text-[#FAFAFA] font-[500]'>Quick Link</h2>
        <p className='w-[109px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Privacy Policy</p>
        <p className='w-[105px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Terms Of Use</p>
        <p className='w-[32px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>FAQ</p>
        <p className='w-[66px] h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Contact</p>
     </div>
        <div>
        <h2 className='w-[148px] h-[28px] font-poppins mb-4 font- text-[20px] text-[#FAFAFA] font-[500]'>Download App</h2>
        <p className='w-[194px] opacity-[70%] h-[48px] font-poppins text-[12px] font-normal text-[#FAFAFA]'>Save $3 with App New User Only</p>
        <div className='flex gap-3 '>
        <Image src='/Qr Code.png' alt="Qr code " width={100} height={100} className='w-[80px] h-[80px]'/>
        <div>
        <Image src='/google.png' alt="google " width={100} height={100} className='w-[108px] h-[38px] rounded-[4px] mt-1'/>
        <Image src='/appstore.png' alt="appstore " width={100} height={100} className='w-[108px] h-[38px] rounded-[4px] mt-1'/>
        </div>
        </div>
        <div className='flex gap-[24px] w-[168px] h-[24px] text-[#FAFAFA] mt-3'>
        <TiSocialFacebook  className='w-[24px] h-[24px]' />
        <CiTwitter className='w-[24px] h-[24px]' />
        <AiOutlineInstagram className='w-[24px] h-[24px]' />
        <RiLinkedinLine  className='w-[24px] h-[24px]'/>
        </div>
        </div>
    </div>
  )
}

export default Footer