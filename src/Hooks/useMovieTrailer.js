import { useEffect } from 'react';
import { API_OPTIONS } from '../utility/constant';
import { addTrailerVideo } from '../utility/movieSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const getBackgroundVideo = async ({ movieId }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const movieTrailer = data.results.filter(
      (movie) => movie.type === 'Trailer'
    );
    const trailer = movieTrailer.length ? movieTrailer[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getBackgroundVideo();
  }, []);
};

export default useMovieTrailer;
