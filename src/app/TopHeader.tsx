import Link from "next/link"
import Image from "next/image"


const Header = () => {
  return (


<header className="flex flex-col border-b-[0.5px] pb-4 border-[#000000]">
{/* Top  01 */}
    <div className="w-full h-[48px] bg-[#000000] flex items-center caret-transparent">
        {/* top frame */}
        <div className="min-w-[859px] h-[24px] flex justify-center items-center gap-[200px]">

{/* heading and Link div */}
<div className="min-w-[590px] h-[24px] gap-2 flex ml-[400px] text-[14px] leading-[24px]">
<h3 className="text-[#FAFAFA] w-[474px] h-[18px] text-nowrap tracking-wide leading-[24px] poppins-regular-400">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
<Link href="/" className="poppins-regular-600 text-[14px] leading-[24px] text-center text-[#FAFAFA] underline tracking-wide">ShopNow</Link>
</div>

{/* language  div */}
<div className="flex w-[78px] h-[24px] gap-[5px] poppins-regular-400 cursor-pointer">
<p className="text-[#FAFAFA]">English</p>
<Image src="/DropDown.png" alt="Logo" height={24}width={24}/>
</div>
        </div>

    </div>


{/* Top  02 */}

<div className="w-[1170px] min-h-[38px] mx-auto flex justify-between items-center pt-[40px]">

{/* div 01 */}
<div className="w-[675px] h-[24px] flex gap-[119px]">
<Image src="/Logo.png" alt="logo" height={24}width={118} className="mr-12"/>

<nav className="flex text-[16px] poppins-regular-400 list-none gap-[48px] text-[#000000]">
    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">Home</li>
    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">Contact</li>
    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">About</li>
    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">Sign Up</li>
</nav>


</div>

{/* div 02 */}

<div className="min-w-[347px] min-h-[38px] gap-[24px]">


<div className="flex py-2 gap-6">


<div className="flex items-center gap-[20px] bg-[#F5F5F5] py-2 px-5 rounded-[4px]">
<input type="text" placeholder="What are you looking for?" className=" rounded-[4px]  placeholder:text-[12px] bg-[#F5F5F5] px-2 outline-none"/>
<Image className="cursor-pointer" src="/Vector.png" alt="icon-explorer" height={24}width={24}/>
</div>



<div className="flex items-center ">
<Image className="cursor-pointer" src="/Frame 551.png" alt="icon-explorer" height={32}width={80}/>
</div>


</div>


</div>
</div>

    </header>
  )
}

export default Header
