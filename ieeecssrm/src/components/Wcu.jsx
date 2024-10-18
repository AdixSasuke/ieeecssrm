import React from 'react';
import search from '../assets/search.png';

const Wcu = () => {
  return (
    <div className="bg-black flex items-center justify-center p-6 py-36">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6">

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={search} className="max-w-full" alt="Search" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="font-agrandir font-bold text-[32px] lg:text-[40px] text-white mb-4">
            Why choose us
          </h1>

          <p className="font-agrandir text-[#999999] leading-relaxed">
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. 
            Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, 
            tellus blandit.
          </p>

          <button className="max-w-[130px] mt-6 mx-auto lg:mx-0 w-[50%] lg:w-[25%] text-[#ea8f61] border border-[#ea8f61] hover:border-[hsl(20,77%,60%)] hover:text-[hsl(20,77%,60%)] px-3 py-2 rounded-3xl font-agrandir font-semibold text-[12px]">
            LET'S CONNECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wcu;
