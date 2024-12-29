import React from "react";
import { LuUserRound } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import Link from "next/link";
const page = () => {
  return (
    <>
    <section
    className="bg-cover bg-center h-64 flex items-center justify-center"
    style={{ backgroundImage: "url('/images/bg.png')" }}
  >
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold">404 Error</h2>
      <p className="pt-2">
        <Link href="/" className="text-yellow-400">Home</Link> › 404
      </p>
    </div>
  </section>
      <div className="max-w-[1920px]">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[1200px] px-4 md:px-8 lg:px-12 py-10 gap-6  rounded-lg">
        <form className="bg-white w-full max-w-[424px] p-6 space-y-6 rounded-md shadow-[0_0_10px_0_rgba(155,159,13,0.4)]"action="#">
          <h2 className="text-[20px] font-bold text-[#0D0D0D]">Sign Up</h2>
          <div className="flex items-center border rounded-md px-3 py-2 gap-2">
            <LuUserRound size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none text-sm text-gray-700"
            />
          </div>
          <div className="flex items-center border rounded-md px-3 py-2 gap-2">
    <IoMailOutline size={20} className="text-gray-400" />
    <input type="email" placeholder="Email" className="w-full outline-none text-sm text-gray-700"/>
          </div>
          <div className="flex items-center border rounded-md px-3 py-2 gap-2">
            <RiLockPasswordLine size={20} className="text-gray-400" />
    <input type="password" placeholder="Password" className="w-full outline-none text-sm text-gray-700"/>
          </div>
    <div className="flex  items-center gap-2">
<input type="checkbox" className="w-4 h-4" />
<label className="text-sm  text-gray-600">Remember me?</label>
          </div>
          <Link href="/singup" >
<button className="w-full bg-[#ff9f0d] text-white mt-4 py-2 rounded-md font-medium hover:bg-[#e88e0c]">Sign Up</button>
</Link>
            <p className="text-right text-sm text-gray-500 hover:underline">Forgot Password?</p>
 <div className="flex items-center justify-center gap-2">
<hr className="w-1/3 border-gray-300" />
     <span className="text-sm text-gray-500">OR</span>
     <hr className="w-1/3 border-gray-300" />
          </div>
          <button className="flex items-center justify-center gap-2 border rounded-md w-full py-2">
            <FcGoogle size={20} />
            <span className="text-sm text-gray-600">Sign Up with Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 border rounded-md w-full py-2">
            <FaApple size={20} />
            <span className="text-sm text-gray-600">Sign Up with Apple</span>
          </button>
        </form>
        </div>
        </div>
    </>
  );
};

export default page;
