/* eslint-disable react/prop-types */
// import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../../Hooks/useMovieTrailer';

const BackgroundVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className=''>
      <iframe
        className='w-[99vw] aspect-video'
        src={`https://www.youtube.com/embed/Kdr5oedn7q8?si=${trailerVideo?.key}?&autoplay=1&mute=1&loop=1`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
