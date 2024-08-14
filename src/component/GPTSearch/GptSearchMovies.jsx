// import React from 'react'

import { useSelector } from 'react-redux';
import MovieList from '../Browse/MovieList';
import ShimmerCards from '../ShimmerCards';

const GptSearchMovies = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  console.log(movieNames, movieResults);
  if (!movieNames || !movieResults) {
    return <ShimmerCards />;
  }

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
