"use client"
import React from 'react';
import Image from 'next/image';


interface Chef {
  id: number;
  image: string;
  name: string;
  chef: string;
}

const TeamMember = () => {
  const chef: Chef[] = [
    {
      id: 1,
      image: '/images/chef.png',
      name: 'Tahmina Rumi',
      chef: 'Chef',
    },
    {
      id: 2,
      image: '/images/chef.png',
      name: 'Jorina Begum',
      chef: 'Chef',
    },
    {
      id: 3,
      image: '/images/chef.png',
      name: 'M. Mohammad',
      chef: 'Chef',
    },
    {
      id: 4,
      image: '/images/chef.png',
      name: 'Munna Kathy',
      chef: 'Chef',
    },
  ];

  return (
    <div className="relative">
      <div className="md:max-w-[1920px] px-4 w-full mt-[50px] h-[460px] bg-[#FF9F0DD9]   z-10 flex flex-col items-center justify-center">
      <div className="md:max-w-[418px] w-full mb-8 h-auto text-center">
        <h2 className="font-helvetica font-bold text-[#ffffff] text-[48px]">Team Member</h2>
        <p className="font-inter text-[#ffffff] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
        </p>
      </div>
      </div>
      <div className="  pt-[-50px] z-20 px-6 sm:px-[250px] py-12 bg-gray-50">
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chef.map((item) => (
          <div key={item.id} className="bg-white shadow-md w-full relative md:mt-[-150px] mt-5 hover:shadow-lg transition-shadow duration-300 ">
      <Image src={item.image} alt="chef" width={312} height={398} className="w-full h-auto"/>
      <div className="mt-4">
        <h2 className="md:text-lg sm:text-sm text-lg font-bold text-center text-gray-700 px-4">{item.name}</h2>
        <p className="text-sm text-center text-gray-600  px-4">{item.chef}
</p>
      </div>
    </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default TeamMember;
