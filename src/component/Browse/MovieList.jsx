/* eslint-disable react/prop-types */
import '../../App.css';
// import React from 'react'

import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-4 bg-'>
      <h1 className='text-white text-2xl pt-12 pb-4 font-semibold'>{title}</h1>
      <div className='flex overflow-x-scroll hide-scrollbar'>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
