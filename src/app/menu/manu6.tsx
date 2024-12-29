import React from 'react';
import Image from 'next/image';
import { BsCupHot } from 'react-icons/bs';

const Menu6 = () => {
  const menuItems = [
    {
      title: 'Caffè macchiato',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '32$',
      highlighted: false,
    },
    {
      title: 'Aperol Spritz Capacianno',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio',
      calories: '700 CAL',
      price: '43$',
      highlighted: true,
    },
    {
      title: 'Caffe Latte Campuri',
      description: 'Ground cumin, avocados, peeled and cubed',
      calories: '1000 CAL',
      price: '14$',
      highlighted: false,
    },
    {
      title: 'Tormentoso BushTea Pintoage',
      description: 'Spreadable cream cheese, crumbled blue cheese',
      calories: '560 CAL',
      price: '35$',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen flex gap-24 flex-col md:flex-row items-center justify-center space-y-28 bg-gray-50 px-8 md:px-24">
      <div className="w-full md:w-3/4">
        <div className="items-center mb-4">
          <BsCupHot size={36} className="text-[#FF9F0D] mb-4 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">Drinks</h2>
        </div>
        <div className="space-y-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3
                  className={`text-xl font-bold ${
                    item.highlighted ? 'text-[#FF9F0D]' : 'text-gray-800'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-600">{item.calories}</p>
              </div>
              <span className="text-xl font-bold text-[#FF9F0D]">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
        <Image 
          src="/images/menu4.png"
          alt="Menu"
          width={448}
          height={626}
          className=" shadow-lg"
        />
      </div>
    </div>
  );
};

export default Menu6;