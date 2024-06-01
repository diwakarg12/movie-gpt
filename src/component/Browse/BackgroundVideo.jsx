/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import useMovieTrailer from '../../Hooks/useMovieTrailer';

const BackgroundVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  const videoUrl = trailerVideo
    ? `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`
    : '';

  return(
    <div className=''>
      {trailerVideo ? (
        <iframe
          className='w-[99vw] md:mt-0 mt-12 md:-mb-0 -mb-8 aspect-video'
          src={videoUrl}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default BackgroundVideo;
