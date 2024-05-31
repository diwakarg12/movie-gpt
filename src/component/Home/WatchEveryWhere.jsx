// import React from 'react'

import { WATCH_EVERYWHERE_IMG, WATCH_EVERYWHERE_VIDEO } from "../../utility/constant";

const WatchEveryWhere = () => {
  return (
    <div className='flex w-full text-white my-3 bg-black opacity-80 h-[32rem] py-12 '>
      <div className='w-1/2 px-28 flex flex-col items-start justify-center'>
        <h1 className="text-5xl font-semibold py-2">Watch everywhere</h1>
        <p className="text-2xl py-3 pr-4">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className='w-1/2'>
        <img
          src={WATCH_EVERYWHERE_IMG}
          alt='Watch Everywhere'
          className='absolute h96'
        />
        <video autoPlay playsInline loop muted className='h-56 ml-32 mt-12'>
          <source src={WATCH_EVERYWHERE_VIDEO} />
        </video>
      </div>
    </div>
  );
};

export default WatchEveryWhere;
