"use client"

import Link from "next/link"
import React from "react";
import { FaAlignLeft, FaAlignRight } from "react-icons/fa";
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav,setNav] = React.useState(false);

  return (
    <div className="md:w-[16rem] bg-inherit h-16 flex relative md:left-[34rem] md:p-2 md:mt-1 rounded-full md:text-white md:space-x-4 p-2 border-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-4 w-[14rem] left-[7rem]  ">
        <Link href="/" className="p-3  rounded-full hover:scale-110 duration-200">Home</Link>
        <Link href="/shop" className="p-3  rounded-full hover:scale-110 duration-200">Shop</Link>
        <Link href="/about" className="p-3   rounded-full hover:scale-110 duration-200">About</Link>

    </div>
  )
}

export default Navbar