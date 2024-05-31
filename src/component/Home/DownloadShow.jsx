// import React from 'react';

import {
  DOWNLOAD_GIF,
  DOWNLOAD_SHOW_MAIN,
  DOWNLOAD_STRANGER_THINGS,
} from '../../utility/constant';

const DownloadShow = () => {
  return (
    <div className='flex w-full text-white my-3 bg-black opacity-80'>
      <div className='w-1/2 relative'>
        <img
          src={DOWNLOAD_SHOW_MAIN}
          alt='Download Show'
          className='h-[90%] pl-12'
        />
        <div className='border w-2/5 h-20 flex gap-4 rounded-md bg-black absolute bottom-20 left-[11.5rem]'>
          <img
            src={DOWNLOAD_STRANGER_THINGS}
            alt='Strenger things'
            className='rounded-md'
          />
          <div className='flex flex-col items-center justify-center'>
            <p className='text-lg font-medium'>Strenger things</p>
            <p className='text-blue-600'>Downloading...</p>
          </div>
          <img
            src={DOWNLOAD_GIF}
            alt='downloading gif'
          />
        </div>
      </div>
      <div className='flex flex-col items-start justify-center px-24 w-1/2'>
        <h1 className='text-5xl font-semibold '>
          Download your shows to watch offline
        </h1>
        <p className='text-2xl font-semibold'>
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
};

export default DownloadShow;
