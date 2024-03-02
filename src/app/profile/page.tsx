"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }
  return (
    <div className="flex flex-col min-h-screen justify-center items-center py-2">
      <button className="bg-blue-600 rounded-lg p-2 hover:bg-blue-700 duration-200 relative md:bottom-[12rem] md:left-[36.5rem] bottom-[15.5rem] left-[11.5rem] "
      onClick={logout}
      >Logout</button>
      <h1>Profile Page</h1>
      <h2 className="p-1 rounded items-center bg-green-500">{data==="nothing" ? "Nothing ":<Link href={`/profile/${data}`}>{data}</Link>}</h2>  

      <button className="bg-blue-600 rounded-lg p-2 hover:bg-blue-700 duration-200 relative md:bottom-[16rem] md:left-[30rem] bottom-[15.5rem] left-[11.5rem] "
      onClick={getUserDetails}
      >Get User Details</button>
      <hr/>
      
    </div>
  )
}


