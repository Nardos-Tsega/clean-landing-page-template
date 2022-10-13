import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

  return (
    <div className='flex mx-auto h-24 justify-between items-center max-w-[1240px] text-white'>
      <h1 className='w-full text-3xl font-bold text-[#17252a]'>.NOTBUK</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 text-[#feffffff]'>Home</li>
        <li className='p-4 text-[#feffffff]'>Gallery</li>
        <li className='p-4 text-[#feffffff]'>About</li>
        <li className='p-4 text-[#feffffff]'>Contact</li>
      </ul>
      <div onClick={handleClick} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#2b7a78] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#17252a] m-4'>.NOTBUK</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 text-[#feffffff] border-b border-gray-300'>Home</li>
                <li className='p-4 text-[#feffffff] border-b border-gray-300'>Gallery</li>
                <li className='p-4 text-[#feffffff] border-b border-gray-300'>About</li>
                <li className='p-4 text-[#feffffff]'>Contact</li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
