import Image from "next/image";

export default function Home() {
  return (
    <div>
  <h1 className="text-center text-2xl mt-20 ">
    HomePage  
  </h1>
  <a href="/login" className="text-center  text-2xl  bg-blue-500 rounded-lg p-3 hover:bg-blue-700 duration-300 relative  top-[5rem] left-[34rem]">Login</a>
  <a href="/signup" className="text-center  text-2xl  bg-blue-500 rounded-lg p-3 hover:bg-blue-700 duration-300 relative  top-[5rem] left-[35rem]">Sign Up</a>
  </div>

  );
}
