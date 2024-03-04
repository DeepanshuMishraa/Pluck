"use client"

import Link from "next/link"


const Navbar = () => {

  return (
    <div className="md:w-[20rem] bg-inherit h-16 flex relative md:left-[32rem] md:p-2 md:mt-1 rounded-full md:text-white md:space-x-4 p-2 border-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-4 w-[18rem] left-[5rem]  ">
        <Link href="/" className="p-3  rounded-full hover:scale-110 duration-200">Home</Link>
        <Link href="/shop" className="p-3  rounded-full hover:scale-110 duration-200">About</Link>
        <Link href="/about" className="p-3   rounded-full hover:scale-110 duration-200">Track Order</Link>

    </div>
  )
}

export default Navbar
