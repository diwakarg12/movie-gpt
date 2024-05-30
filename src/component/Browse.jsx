// import React from 'react'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import HeroSection from './Browse/HeroSection.jsx';
import MovieListSection from './Browse/MovieListSection';
import Header from './Header';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className=''>
      <Header />
      <HeroSection />
      <MovieListSection />
    </div>
  );
};

export default Browse;
