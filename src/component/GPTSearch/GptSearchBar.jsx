// import React from 'react'

import { useSelector } from 'react-redux';
import { Gptlang } from '../../utility/langConstant';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='w-1/2 my-24 py-4 bg-black rounded-md text-white grid grid-cols-12'>
      <input
        type='text'
        name='search'
        className='col-span-9 bg-transparent text-white mx-2 border p-2 font-medium placeholder:font-medium placeholder:text-white rounded-sm focus:outline-none'
        placeholder={Gptlang[langKey].gptSearchPlaceholder}
      />
      <button className='col-span-3 bg-red-700 rounded-sm py-2 mx-2 font-semibold text-lg hover:bg-opacity-80'>
        {Gptlang[langKey].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
