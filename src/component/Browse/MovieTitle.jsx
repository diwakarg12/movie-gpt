/* eslint-disable react/prop-types */
import { FaPlay } from 'react-icons/fa';
import { TiInfo } from 'react-icons/ti';
import TruncateText from '../../utility/TruncateText';

const MovieTitle = ({ title, overview }) => {
  return (
    <div className='text-white md:pt-40 pt-16 md:px-16 px-2 bg-black bg-opacity-50 bg-blend-multiply absolute w-[99vw] aspect-video md:block hidden'>
      <h1 className='md:text-5xl text-3xl font-bold md:py-4 py-2'>{title}</h1>
      <p className='md:text-xl text-base font-medium md:w-1/2 w-full py-2'>
        {TruncateText(overview, 30)}
      </p>
      <div className='py-8 flex'>
        <button className='bg-white text-black text-lg font-medium w-36 py-2 rounded-sm mx-2 flex items-center justify-center gap-4 hover:bg-opacity-80'>
          {' '}
          <FaPlay className='text-xl' />
          Play
        </button>
        <button className='bg-gray-400 text-black text-lg font-medium w-36 py-2 rounded-sm mx-2 flex items-center justify-center gap-4 hover:bg-opacity-80'>
          <TiInfo className='text-2xl' />
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
