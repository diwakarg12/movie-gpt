// import React from 'react';

const KidProfile = () => {
  return (
    <div className='flex w-full text-white my-3 bg-black opacity-80 h-[32rem] py-12'>
      <div className='w-1/2 flex flex-col items-start justify-center'>
        <img
          src='https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d'
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