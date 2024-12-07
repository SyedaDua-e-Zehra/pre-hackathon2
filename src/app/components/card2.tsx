import React from 'react'
import Image from 'next/image';
interface Propstype{
    img:string;
    title: string;
    price: string;
    rate: string;

}
const Card2  = ({img,title,price,rate}:Propstype) => {
  return (
    <div>
     <div className='  w-[270px] h-[350px]'>
        <div><Image src={img} alt='Card' width={500} height={500} className='w-[270px] h-[250px] bg-[#F5F5F5] p-2'/></div>
        <h2 className='font-poppins font-semibold'>{title}</h2>
        <p className='w-[94px] h-[24px] gap-[12px] font-poppins font-500 '>{price}</p>
        <div><Image src={rate} alt='Card' width={500} height={500} className='w-[140px] h-[20px] bg-[#F5F5F5] gap-[16px]'/></div>
     </div>
    </div>
  )
}
export default Card2;