// import React from 'react';

import { BG_IMG } from '../../utility/constant';
import GptSearchBar from './GptSearchBar';
import GptSearchMovies from './GptSearchMovies';

const GptSearch = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-[url(${BG_IMG})] bg-black bg-opacity-50 bg-blend-multiply relative`}
    >
      <GptSearchBar />
      <GptSearchMovies />
    </div>
  );
};

export default GptSearch;
