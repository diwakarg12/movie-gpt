/* eslint-disable react/prop-types */
import { FaPlay } from 'react-icons/fa';
import { TiInfo } from 'react-icons/ti';
import TruncateText from '../../utility/TruncateText';

const MovieTitle = ({ title, overview }) => {
  return (
    <div className='text-white pt-40 px-16 bg-black bg-opacity-50 bg-blend-multiply absolute w-[99vw] aspect-video'>
      <h1 className='text-5xl font-bold py-4'>{title}</h1>
      <p className='text-xl font-medium w-1/2 py-2'>
        {TruncateText(overview, 40)}
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
