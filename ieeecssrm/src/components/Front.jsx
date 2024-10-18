import React from 'react';

const Front = () => {
  return (
    <div className='lg:bg-[url("./assets/Frame.png")] bg-[url("./assets/Frame-sm.png")] xl:bg-[url("./assets/Frame.png")] bg-cover bg-center h-screen w-full flex flex-col items-center justify-center p-5'>
        <div className='w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] font-agrandir text-white flex flex-col text-start justify-center'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none'>Attract</h1>
            <h1 className="gradient-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">NewLeads</h1>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none'>like never</h1>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none'>before</h1>
            <p className='text-[#A09F9F] text-[16px] mt-4'>
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros.
            </p>
            <div className='flex mt-8 gap-4'>
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full rounded-full py-2 md:py-3 text-sm md:text-base px-4 font-agrandir bg-[#110F0F] border border-white outline-none focus:border-[#EB9062] focus:ring-1 focus:ring-[#EB9062]' 
              />
              <button className='font-agrandir text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-[hsl(20,77%,60%)] bg-[#ea8f61] font-medium'>Send</button>
            </div>
        </div>
    </div>
  );
}

export default Front;
