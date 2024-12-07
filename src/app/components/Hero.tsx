import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Card from '../components/Card';
import Card2 from '../components/card2';
const Hero = () => {
  return (
    <div className='flex p-6'>
        <div className='flex md:text-left'>
            <div className='w-[217px] h-[344px] mt-5 ml-[150px] gap-[16px]'>
              <span className='flex gap-1 '><p className='w-[135px] font-poppins font-normal text-[16px] h-[24px] text-left'>Woman’s Fashion</p><FaAngleRight /></span>
              <span className='flex gap-1 '><p className='w-[135px] font-poppins font-normal text-[16px] h-[24px] text-left'>Men’s Fashion</p><FaAngleRight /></span>
              <p className='w-[87px]font-poppins font-normal text-[16px] h-[24px] text-left'>Electronics</p>
              <p className='w-[132px]font-poppins font-normal text-[16px] h-[24px] text-left'>Home & Lifestyle</p>
              <p className='w-[73px]font-poppins font-normal text-[16px] h-[24px] text-left'>Medicine</p>
              <p className='w-[137px]font-poppins font-normal text-[16px] h-[24px] text-left'>Sports & Outdoor</p>
              <p className='w-[109px]font-poppins font-normal text-[16px] h-[24px] text-left'>Baby’s & Toys</p>
              <p className='w-[131px]font-poppins font-normal text-[16px] h-[24px] text-left'>Groceries & Pets</p>
              <p className='w-[128px]font-poppins font-normal text-[16px] h-[24px] text-left'>Health & Beauty</p>
            </div>
            <div className=' mt-[-20px] '>
              <div className='w-[2px] h-[350px] bg-black opacity-[30%] mr-[50px]'></div>
            </div>
        </div>
        <div>
        <Image src='/Frame .png' alt="Frame" width={1000} height={1000} className='mr-[696px] w-[ ] h-[292px]'/>
        </div>
    </div>
  )
}

export default Hero


export const Hero1 =() => {
  return (
    <div >
      <div className='w-[211px] h-[103px] gap-[24px]  flex ml-[110px]'>
        <div className='w-[20px] h-[40px] bg-[#D84444] rounded-[4px]'> </div>
          <h2 className='w-[64px] h-[20px] text-[16px] pt-[10px] font-semibold font-poppins text-[#D84444]'>Today's</h2>
        </div>
      <div className='flex justify-between ml-[150px]'>
        <div className='w-[211px] h-[48px] font-inter font-semibold text-4xl '>Flash Sales</div>
        <div>
          <Image src='/time.png' alt='time' width={1000} height={1000} className='w-[302px] h-[50px] mr-[290px] mt-[-15px]'/>
        </div>
        <div className='flex mr-[100px]'>
          <button className='p-4 bg-[#FAFAFA] rounded-full'><FaArrowLeft />
          </button>
          <button className='p-4 bg-[#FAFAFA] rounded-full'>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}



export const CardDetails = () => {

  const data = [
    {
      id : 1,
      img:"/1.png",
      title:"HAVIT HV-G92 Gamepad",
      price:"$120 $160",
      rate:"/rate.png",
    },
    {
      id : 2,
      img:"/3.png",
      title:"AK-900 Wired Keyboard",
      price:"$960 $1160",
      rate:"/rate.png",
    },
    {
      id : 3,
      img:"/4.png",
      title:"IPS LCD Gaming Monitor",
      price:"$370 $400",
      rate:"/rate.png",
    },
    {
      id : 4,
      img:"/5.png",
      title:"S-Series Comfort Chair ",
      price:"$375 $400",
      rate:"/rate.png",
    },
  ]
  return(
    <div className='flex gap-[16px] ml-[150px] h-[350px] w-[1170px] mt-[40px] '>
      {
        data.map((item) => {
          return <Card2 
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          rate={item.rate}
          ></Card2>     
           })
      }
 
    </div>
  )
}
export const Hero3 = () => {
  return (
    <div>
      <Image src='/hero2.png' alt='hero2' width={1000} height={1000} className='w-[1050px] h-[400px] ml-[150px] mr-[50px]'/>
      <div className='w-[211px] h-[103px] gap-[24px]  flex ml-[110px]'>
        <div className='w-[20px] h-[40px] bg-[#D84444] rounded-[4px]'> </div>
          <h2 className='w-[106px] h-[20px] text-[16px] pt-[10px] font-semibold font-poppins text-[#D84444]'>Our Products</h2>
        </div>
      <div className='flex justify-between ml-[150px]'>
        <div className='w-[398px] h-[48px] font-inter font-semibold text-4xl '>Explore Our Products</div>
        
        <div className='flex mr-[100px]'>
          <button className='p-4 bg-[#FAFAFA] rounded-full'><FaArrowLeft />
          </button>
          <button className='p-4 bg-[#FAFAFA] rounded-full'>
            <FaArrowRight />
          </button>
        </div>
      
      </div>
    </div>
  )
}
export const CardDetails2 = () => {

  const data = [
    {
      id : 1,
      img:"/cart.png",
      title:"Breed Dry Dog Food",
      price:"$100",
      rate:"/rate.png",
    },
    {
      id : 2,
      img:"/Cart (1).png",
      title:"CANON EOS DSLR Camera",
      price:"$360",
      rate:"/rate.png",
    },
    {
      id : 3,
      img:"/Cart (2).png",
      title:"ASUS FHD Gaming Laptop",
      price:"$700",
      rate:"/rate.png",
    },
    {
      id : 4,
      img:"/Cart (4).jpg",
      title:"Curology Product Set",
      price:"$960",
      rate:"/rate.png",
    },
    
  ]
  return(
    <div>
    <div className='flex gap-[16px] ml-[150px] h-[350px] w-[1000px] mt-[40px] '>
      {
        data.map((item) => {
          return <Card2 
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          rate={item.rate}
          ></Card2>     
           })
      };
</div>
    </div>
  )
}

export const CardDetails3 = () => {

  const data = [
    {
      id : 5,
      img:"/Cart (5).png",
      title:"Kids Electric Car",
      price:"$1160",
      rate:"/rate.png",
    },
    {
      id : 6,
      img:"/Cart (6).png",
      title:"Jr. Zoom Soccer Cleats ",
      price:"$660",
      rate:"/rate.png",
    },
    {
      id : 7,
      img:"/Cart (7).png",
      title:"GP11 Shooter USB Gamepad",
      price:"$660",
      rate:"/rate.png",
    },
    {
      id : 8,
      img:"/Cart (8).png",
      title:"Quilted Satin Jacket",
      price:"$",
      rate:"/rate.png",
    },
  ]
  return(
    <div>
    <div className='flex gap-[60px] ml-[150px] h-[732px] w-[1170px] mt-[40px] '>
      {
        data.map((item) => {
          return <Card2 
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          rate={item.rate}
          ></Card2>     
           })
      };
      
      <div>
        <Image src='/button.png' alt="Frame" width={500} height={500} className='pt-[16px] pr-[48px] pb[16px] pl-[48px] w-[234px] h-[54px] rounded-[4px] gap[10px]'/>
        </div>


</div>
       <div>
        <Image src='/button.png' alt="Frame" width={500} height={500} className='pt-[16px] pr-[48px] pb[16px] pl-[48px] w-[234px] h-[54px] rounded-[4px] gap[10px]'/>
        </div>

    </div>
  )
}