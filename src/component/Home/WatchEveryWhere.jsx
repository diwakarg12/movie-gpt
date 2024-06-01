// import React from 'react'

import {
  WATCH_EVERYWHERE_IMG,
  WATCH_EVERYWHERE_VIDEO,
} from '../../utility/constant';
import { WatchEveryWhereLang } from '../../utility/langConstant';
import { useSelector } from 'react-redux';

const WatchEveryWhere = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='flex flex-wrap w-full text-white my-3 bg-black opacity-80 h-[32rem] py-12 '>
      <div className='md:w-1/2 w-full md:px-28 px-4 flex flex-col items-start justify-center'>
        <h1 className='md:text-5xl text-4xl font-semibold py-2'>
          {WatchEveryWhereLang[langKey].heading}
        </h1>
        <p className='md:text-2xl text-xl py-3 md:pr-4 pr-0'>
          {WatchEveryWhereLang[langKey].paragraph}
        </p>
      </div>
      <div className='md:w-1/2 w-full'>
        <img
          src={WATCH_EVERYWHERE_IMG}
          alt='Watch Everywhere'
          className='absolute h96'
        />
        <video autoPlay playsInline loop muted className='md:h-56 h-32 md:ml-32 ml-16 md:mt-12 mt-8'>
          <source src={WATCH_EVERYWHERE_VIDEO} />
        </video>
      </div>
    </div>
  );
};

export default WatchEveryWhere;
