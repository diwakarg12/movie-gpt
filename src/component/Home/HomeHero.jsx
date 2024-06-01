// import React from 'react'

import { useSelector } from 'react-redux';
import { BG_IMG } from '../../utility/constant';
import { HomeHeroLang } from '../../utility/langConstant';

const HomeHero = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div
      className='bg-black bg-opacity-50 bg-blend-multiply flex flex-col items-center justify-start text-white md:py-56 py-32 w-auto'
      style={{ backgroundImage: `url(${BG_IMG})` }}
    >
      <h1 className='md:text-[3.25rem] text-3xl md:px-0 px-4 py-3 font-semibold'>
        {HomeHeroLang[langKey].h1}
      </h1>
      <h2 className='md:text-3xl text-2xl font-medium py-2 '>
        {HomeHeroLang[langKey].h2}
      </h2>
      <p className='md:text-2xl text-xl md:px-0 px-4 py-2 font-medium'>
        {HomeHeroLang[langKey].p}
      </p>
      <div className='flex flex-wrap'>
        <input
          type='email'
          name='email'
          className='py-2 md:w-[28rem] w-[14rem] px-2 text-white text-xl font-medium bg-black bg-opacity-40 bg-blend-multiply placeholder:text-white border-2 rounded-sm'
          placeholder={HomeHeroLang[langKey].placeholder}
        />
        <button
          type='submit'
          className='md:text-2xl text-xl font-semibold md:mx-4 mx-2 rounded-md md:w-52 w-24 h-14 bg-red-700'
        >
          {HomeHeroLang[langKey].botton}
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
