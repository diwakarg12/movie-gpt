// import React from 'react'

import { ENJOY_ON_TV_IMG, ENJOY_ON_TV_VIDEO } from '../../utility/constant';
import { useSelector } from 'react-redux';
import { EnjoyOnTVLang } from '../../utility/langConstant';

const EnjoyOnTv = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='flex flex-wrap w-full text-white py-24 my-3 bg-black opacity-80 '>
      <div className='flex flex-col items-start justify-center md:w-1/2 w-full md:mx-24 mx-4 md:pb-0 pb-20'>
        <h2 className='md:text-6xl text-4xl font-semibold py-3'>
          {EnjoyOnTVLang[langKey].heading}
        </h2>
        <p className='md:text-[1.75rem] text-[1.25rem] font-medium py-2'>
          {EnjoyOnTVLang[langKey].paragraph}
        </p>
      </div>
      <div className='md:w-1/2 w-full flex flex-col items-center justify-center relative'>
        <img
          src={ENJOY_ON_TV_IMG}
          alt='Watch on Tv'
          className='absolute h-96'
        />
        <video autoPlay playsInline muted loop className=''>
          <source src={ENJOY_ON_TV_VIDEO} />
        </video>
      </div>
    </div>
  );
};

export default EnjoyOnTv;
