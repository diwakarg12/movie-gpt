/* eslint-disable react/prop-types */
// import React from 'react'

import { IMG_CDN_URL } from '../../utility/constant';

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  return (
    <div className='mr-2'>
      <img src={IMG_CDN_URL + poster_path} className='min-w-32' alt='Movie Card' />
    </div>
  );
};

export default MovieCard;
