import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <p className='text-center text-4xl font-bold pt-8'>199 Birr</p>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 mx-8'>1 Granted User</p>
                  <p className='py-2 mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#def2f1] w-[200px] text-[#17252a] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-[#def2f1] flex flex-col p-4 py-16 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <p className='text-center text-4xl font-bold pt-8'>299 Birr</p>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 mx-8'>1 Granted User</p>
                  <p className='py-2 mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#17252a] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <p className='text-center text-4xl font-bold pt-8'>199 Birr</p>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 mx-8'>1 Granted User</p>
                  <p className='py-2 mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#def2f1] w-[200px] text-[#17252a] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;