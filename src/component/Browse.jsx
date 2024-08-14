// import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usepopularMovies.js';
import useTopRatedMovies from '../Hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../Hooks/useUpcomingMovies.js';
import HeroSection from './Browse/HeroSection.jsx';
import MovieListSection from './Browse/MovieListSection';
import GptSearch from './GPTSearch/GptSearch.jsx';
import Header from './Header';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='overflow-x-hidden'>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <HeroSection />
          <MovieListSection />
        </>
      )}
    </div>
  );
};

export default Browse;
