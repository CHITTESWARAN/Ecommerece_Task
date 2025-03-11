import React from 'react';
import { howtowork } from '../components/Products';

const Footer = () => {
    
  return (
    <div className="w-full py-10">
        <h1 className='font-bold m-auto text-2xl w-full text-center'>How it Works</h1>
      <div className="w-[80%] m-auto flex flex-wrap justify-center gap-8">
        {howtowork.map((w) => (
        <div key={w.id} className="flex flex-col items-center  p-4 px-8 shadow-xl text-center max-w-xs">
            <img src={w.image} alt={w.title} className="h-20 w-20 md:h-24 md:w-24 object-contain" />
         <h2 className="font-bold text-lg mt-2">{w.title}</h2>
             <p className="text-gray-700 text-sm mt-1">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
