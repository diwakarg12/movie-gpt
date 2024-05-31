// import React from 'react';

import { KIDS_PROFILE } from "../../utility/constant";

const KidProfile = () => {
  return (
    <div className='flex w-full text-white my-3 bg-black opacity-80 h-[32rem] py-12'>
      <div className='w-1/2 flex flex-col items-start justify-center'>
        <img
          src={KIDS_PROFILE}
          alt='Kid Profile'
          className='h-96'
        />
      </div>
      <div className='w-1/2 flex flex-col items-start justify-center'>
        <h1 className='text-5xl font-bold py-3'>Create profiles for kids</h1>
        <p className='text-2xl font-medium pr-48 py-2'>
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

export default KidProfile;