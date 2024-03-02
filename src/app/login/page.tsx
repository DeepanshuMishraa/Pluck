"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const page = () => {

  const router = useRouter();
  const [buttonDisabled,setButtonDisabled] = useState(false);
  const [loading,setLoading] = useState(false);



  const [user,setUser] = useState({
    username: "",
    password : "",
  });

  const onLogin = async()=>{
    try{
      setLoading(true);
      const response = await axios.post("/api/users/login",user)
      console.log("Login success",response.data);
      toast.success("Login Success");
      router.push(`/profile/${user.username}`)
      
    }catch(err:any){
      console.log("Login Failed")
      toast.error(err.message);
    }finally{
      setLoading(false);    }
  }

  useEffect(()=>{
    if(user.username.length>0 && user.password.length>0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  },[user])

  return (

      <div className="border-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-3 top-[1rem] rounded-lg relative md:top-[3rem] md:w-[40rem]  md:left-[20rem] w-[28rem]  h-[30rem]">
      <div className="text-2xl font-medium mb-20 text-center mt-20">
        <h1>{loading ? "Processing" : "Login"}</h1>
      <div className="flex flex-col p-2 space-y-4 w-[20rem] relative md:left-[11rem] left-[4rem] mt-10">

        <input 
        type="text" 
        placeholder="Username" 
        className="rounded-lg px-1 py-1 bg-inherit border border-white" 
        value = {user.username}
        onChange={(e)=>setUser({...user,username:e.target.value})}
      
        />
      <input 
      type="password" 
      placeholder="Password" 
      className="rounded-lg p-1 bg-inherit border border-white"
      value = {user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      />
      <button className="rounded-lg bg-blue-500 hover:bg-blue-700 duration-200" onClick={onLogin}>{buttonDisabled ? "No SignIn" : "Sign In"}</button>
      <h1 className="text-lg">New Here?</h1><Link href="/signup" className="text-lg underline text-blue-500">Create an account</Link>
      </div>
      
      </div>

      </div>
    
  )
}

export default page
