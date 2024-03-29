"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast,Toaster } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
        
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            toast.success("Account Created Successfully", { position: 'bottom-center' });
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error("unable to create your account");
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
  return (
      <div className="border-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  top-[1rem]  rounded-lg relative md:top-[3rem] md:mt-1 md:w-[40rem] md:h-[30rem]  md:left-[20rem] w-[28rem] h-[30rem]">
      <div className="text-2xl font-medium mb-20 text-center mt-20">
        <h1>{loading ? "Processing" : "SignUp"}</h1>
      <div className="flex flex-col p-2 space-y-4 w-[20rem] relative md:left-[11rem] left-[4rem] mt-10">
        <input 
        type="text" 
        placeholder="Email" 
        className="rounded-lg p-1 bg-inherit border border-white" 
        value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}
        />

        <input type="text" 
        placeholder="Username" 
        className="rounded-lg p-1 bg-inherit border border-white"
        value={user.username}
        onChange={(e)=>setUser({...user,username:e.target.value})}
      
        />
      <input type="password" 
      placeholder="Password" 
      className="rounded-lg p-1 bg-inherit border border-white" 
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      />
      <button className="rounded-lg bg-blue-500 hover:bg-blue-700 duration-200" onClick={onSignup}>{buttonDisabled ?"No signUp":"Sign Up"}</button>
      <h1 className="text-lg">Have an Account?</h1><Link href="/login" className="text-lg underline text-blue-500" >Login Here</Link>
      </div>
      
      </div>
      <Toaster position="bottom-center" />

      </div>
    
  )
}

