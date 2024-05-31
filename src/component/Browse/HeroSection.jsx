// import React from 'react'
import MovieTitle from './MovieTitle';
import BackgroundVideo from './BackgroundVideo';
import { useSelector } from 'react-redux';
// import useMovieTrailer from '../../Hooks/useMovieTrailer';

const HeroSection = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;
  const mainMovie = movie[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className='text-white border-2'>
      <MovieTitle title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default HeroSection;
