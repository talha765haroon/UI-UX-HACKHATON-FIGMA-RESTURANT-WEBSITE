import React from 'react';
import Image from 'next/image';
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";

const Hero6 = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <p className="font-greatvibes text-[16px] md:text-[18px] text-[#FF9F0D]">Blog Post</p>
        <h2 className="font-helvetica text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#FFFFFF]">
          <span className='text-[#FF9F0D]'>La</span>test News & Blog
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='bg-[#1A1A1A] p-6 rounded-2 flex flex-col'>
          <Image
            src="/images/la1.png"
            alt="Blog 1"
            width={240}
            height={329}
            className="w-full mb-4"
          />
          <p className='font-inter text-[16px] text-[#FF9F0D] mb-2'>10 February 2022</p>
          <h3 className="font-helvetica font-bold text-[#ffffff] text-[20px] mb-4">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
          </h3>
          <div className='flex justify-between w-full px-4'>
            <p className='font-inter text-[16px] text-[#ffffff] cursor-pointer'>Learn More</p>
            <div className='flex gap-2 text-[#ffffff]'>
              <AiOutlineLike size={20} className='hover:text-[#FF9F0D]'/>
              <LuMessageSquareMore size={20} className='hover:text-[#ffffff] text-[#FF9F0D]' />
              <IoShareSocialOutline size={20} className='hover:text-[#FF9F0D]'/>
            </div>
          </div>
        </div>
        <div className='bg-[#1A1A1A] p-6 flex flex-col'>
          <Image
            src="/images/la2.png"
            alt="Blog 2"
            width={240}
            height={329}
            className="w-full mb-4"
          />
          <p className='font-inter text-[16px] text-[#FF9F0D] mb-2'>10 February 2022</p>
          <h3 className="font-helvetica font-bold text-[#ffffff] text-[20px] mb-4">
            Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
          </h3>
          <div className='flex justify-between w-full px-4'>
            <p className='font-inter text-[16px] text-[#ffffff] cursor-pointer'>Learn More</p>
            <div className='flex gap-4 text-[#ffffff]'>
              <AiOutlineLike size={20} className='hover:text-[#FF9F0D]' />
              <LuMessageSquareMore size={20} className='text-[#FF9F0D] hover:text-[#ffffff]' />
              <IoShareSocialOutline size={20} className='hover:text-[#FF9F0D]' />
            </div>
          </div>
        </div>
        <div className='bg-[#1A1A1A] p-6  flex flex-col'>
          <Image
            src="/images/la3.png"
            alt="Blog 3"
            width={240}
            height={329}
            className="w-full mb-4"
          />
          <p className='font-inter text-[16px] text-[#FF9F0D] mb-2'>10 February 2022</p>
          <h3 className="font-helvetica font-bold text-[#ffffff] text-[20px] mb-4">
            Curabitur Rutrum Velit Ac Congue Malesuada
          </h3>
          <div className='flex justify-between w-full px-4'>
            <p className='font-inter text-[16px] text-[#ffffff] cursor-pointer'>Learn More</p>
            <div className='flex gap-4 text-[#ffffff]'>
              <AiOutlineLike size={20} className='hover:text-[#FF9F0D]' />
              <LuMessageSquareMore size={20} className='text-[#FF9F0D] hover:text-[#ffffff]' />
              <IoShareSocialOutline size={20} className='hover:text-[#FF9F0D]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
