// import React from 'react'

import { useSelector } from 'react-redux';
import MovieList from '../Browse/MovieList';

const GptSearchMovies = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  // if (!movieNames || movieResults) return null;

  return (
    <div className='bg-black bg-opacity-50 bg-blend-multiply py-10 px-4'>
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
      <p className='text-white py-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, atque?
      </p>
    </div>
  );
};

export default GptSearchMovies;
