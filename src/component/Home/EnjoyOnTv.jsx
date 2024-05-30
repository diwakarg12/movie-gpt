// import React from 'react'

const EnjoyOnTv = () => {
  return (
    <div className='flex w-full text-white py-24 my-3 bg-black opacity-80 '>
      <div className='flex flex-col items-start justify-center w-1/2 mx-24'>
        <h2 className='text-6xl font-semibold py-3'>Enjoy on your Tv</h2>
        <p className='text-[1.75rem] font-medium py-2'>
          Watch on smart TVs, PlayStation, Xbox, <br/> Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center relative'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
          alt='Watch on Tv'
          className='absolute h-96'
        />
        <video autoPlay playsInline muted loop className=''>
          <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' />
        </video>
      </div>
    </div>
  );
};

export default EnjoyOnTv;
