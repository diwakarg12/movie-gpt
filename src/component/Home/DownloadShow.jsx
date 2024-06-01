// import React from 'react';

import { useSelector } from 'react-redux';
import {
  DOWNLOAD_GIF,
  DOWNLOAD_SHOW_MAIN,
  DOWNLOAD_STRANGER_THINGS,
} from '../../utility/constant';
import { DownloadShowLang } from '../../utility/langConstant';

const DownloadShow = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='flex flex-wrap w-full text-white my-3 bg-black opacity-80'>
      <div className='md:w-1/2 w-full relative'>
        <img
          src={DOWNLOAD_SHOW_MAIN}
          alt='Download Show'
          className='md:h-[90%] h-full md:pl-12 pl-0'
        />
        <div className='border md:w-2/5 w-3/5 h-20 flex gap-4 rounded-md bg-black absolute md:bottom-20 bottom-2 md:left-[11.5rem] left-16'>
          <img
            src={DOWNLOAD_STRANGER_THINGS}
            alt='Strenger things'
            className='rounded-md'
          />
          <div className='flex flex-col items-center justify-center md:-ml-0 md:mr-0 -ml-3 mr-4'>
            <p className='md:text-lg text-sm font-medium'>
              {DownloadShowLang[langKey].p1}
            </p>
            <p className='text-blue-600'>{DownloadShowLang[langKey].p2}</p>
          </div>
          <img
            src={DOWNLOAD_GIF}
            className='md:-ml-0 md:mt-0 mt-1 -ml-10 md:h-full h-5/6'
            alt='downloading gif'
          />
        </div>
      </div>
      <div className='flex flex-col items-start justify-center md:px-24 px-4 md:w-1/2 w-full md:py-0 py-8'>
        <h1 className='md:text-5xl text-3xl font-semibold '>
          {DownloadShowLang[langKey].heading}
        </h1>
        <p className='md:text-2xl text-xl font-semibold'>
          {DownloadShowLang[langKey].paragraph}
        </p>
      </div>
    </div>
  );
};

export default DownloadShow;
