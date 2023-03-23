import React from 'react';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold mb-10 px-10 py-5'>
      <div>
        <h1 className='text-7xl'>Coding with Chris</h1>
        <h2 className='mt-5 md:mt-2'>
          Welcome to{' '}
          <span className='underline decoration-3 decoration-[#f72]'>
            My Coding
          </span>{' '}
          blog
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Learning To Code | All Things Tech | Weekly Coding challenges!
      </p>
    </div>
  );
};

export default Banner;
