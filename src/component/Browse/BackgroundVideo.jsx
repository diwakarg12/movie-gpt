/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import useMovieTrailer from '../../Hooks/useMovieTrailer';

const BackgroundVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  const videoKey = trailerVideo?.key || 'Kdr5oedn7q8'; // Default video key if trailerVideo is not available

  return (
    <div className=''>
      <iframe
        className='w-[99vw] aspect-video'
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
