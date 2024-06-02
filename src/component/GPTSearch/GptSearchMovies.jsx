// import React from 'react'

import { useSelector } from 'react-redux';
import MovieList from '../Browse/MovieList';

const GptSearchMovies = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  console.log(movieNames, movieResults);
  if (!movieNames) return null;

  if (!movieResults) return null;

  return (
    <div className='bg-black bg-opacity-50 bg-blend-multiply px-4'>
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchMovies;
