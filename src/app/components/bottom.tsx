import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Bottom = () => {
  return (
    <div className="w-full max-w-[1920px] bg-[#4F4F4F] flex flex-col items-center py-4 px-4 md:px-8">
      <div className="w-full max-w-[1318px] flex flex-col md:flex-row items-center justify-between text-center gap-4">
        <p className="text-[14px] md:text-[16px] text-white font-inter font-normal">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded bg-white hover:bg-gray-300 transition">
            <Link href="https://www.facebook.com/parniyasohail098"><FaFacebookF size={18} className="text-black" /></Link>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded bg-white hover:bg-gray-300 transition">
            <Link href="https://github.com/rabiasohail098"><FaGithub size={18} className="text-black" /></Link>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded bg-white hover:bg-gray-300 transition">
            <Link href="https://www.instagram.com/rabiasohail642/"><FaInstagram size={18} className="text-black" /></Link>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded bg-white hover:bg-gray-300 transition">
           <Link href="www.youtube.com/@Parniya098"><FaYoutube size={18} className="text-[#FF9F0D]" /></Link> 
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded bg-white hover:bg-gray-300 transition">
            <Image src="/images/pa.png" alt="Logo" width={16} height={18} className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
