// import React from 'react';

import { useSelector } from 'react-redux';
import { KIDS_PROFILE } from '../../utility/constant';
import { KidProfileLang } from '../../utility/langConstant';

const KidProfile = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='flex flex-wrap w-full text-white my-3 bg-black opacity-80 h-[32rem] py-12'>
      <div className='md:w-1/2 w-full flex flex-col items-start justify-center'>
        <img
          src={KIDS_PROFILE}
          alt='Kid Profile'
          className='md:h-96 h-40 md:m-0 m-auto'
        />
      </div>
      <div className='md:w-1/2 w-full flex flex-col items-start justify-center'>
        <h1 className='md:text-5xl text-4xl md:px-0 px-4 font-bold py-3'>
          {KidProfileLang[langKey].heading}
        </h1>
        <p className='md:text-2xl text-xl font-medium md:pr-48 md:px-0 px-4 py-2'>
          {KidProfileLang[langKey].paragraph}
        </p>
      </div>
    </div>
  );
};

export default KidProfile;
