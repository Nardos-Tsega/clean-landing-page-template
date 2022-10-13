import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1200px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#17252a] text-lg font-bold'>WRITE YOUR OWN STORY</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 py-1'>The world is your canvas</h1>
        <div className='flex justify-center md:py-3'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Best suited for</p>
             <Typed
                    className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
                    strings={['BLOG', 'DOCUMENTATION', 'CONTRACTS', 'EVERYTHING']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
        </div>
        <p className='md:text-xl font-bold text-[#def2f1] py-4 max-w-[80%] mx-auto'>
            Notbuk allows you to access all your documents from all devices, making your life much easier
        </p>
        <button className='bg-[#17252a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-lg'>Start Writing</button>
      </div>
    </div>
  )
}

export default Hero
