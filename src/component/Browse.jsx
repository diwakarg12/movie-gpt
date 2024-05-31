// import React from 'react'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usepopularMovies.js';
import useTopRatedMovies from '../Hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../Hooks/useUpcomingMovies.js';
import HeroSection from './Browse/HeroSection.jsx';
import MovieListSection from './Browse/MovieListSection';
import Header from './Header';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <HeroSection />
      <MovieListSection />
    </div>
  );
};

export default Browse;
