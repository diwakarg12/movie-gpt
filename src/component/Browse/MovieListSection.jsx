// import React from 'react'

import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const MovieListSection = () => {
  const movies = useSelector((store) => store?.movies);
  if (
    !movies.nowPlayingMovies ||
    !movies?.popularMovies ||
    !movies?.topRatedMovies
  ) {
    return <div>Movies Not Found</div>;
  }
  return (
    <div className='bg-black'>
      <div className='md:-mt-72 -mt-0 relative z-[1000]'>
        <MovieList
          title={'Now Playing Movies'}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={'Top rated Movies'} movies={movies?.topRatedMovies} />
        <MovieList title={'Upcoming movies'} movies={movies?.upcomingMovies} />
        <MovieList title={'Popular Movies'} movies={movies?.popularMovies} />
      </div>
    </div>
  );
};

export default MovieListSection;
