import { useEffect } from 'react';
import { API_OPTIONS } from '../utility/constant';
import { addTrailerVideo } from '../utility/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getBackgroundVideo = async (movieId) => {
    try {
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
    } catch (error) {
      console.error('Error fetching movie trailer:', error);
    }
  };

  useEffect(() => {
    if (movieId && !trailerVideo) {
      getBackgroundVideo(movieId);
    }
  }, []);
};

export default useMovieTrailer;
