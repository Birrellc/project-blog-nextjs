import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoTest from '../assets/logoTest.png';

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src={logoTest}
            alt='logo'
            width={50}
            height={50}
          />
        </Link>
        <h1>My Blog Test</h1>
      </div>
      <div>
        <Link
          href='/'
          className='px-5 py-3 text:sm md:text-base bg-gray-800 text-[#FFF] flex items-center rounded-full text-center'
        >
          Sign up to the newsletter!
        </Link>
      </div>
    </header>
  );
};

export default Header;
