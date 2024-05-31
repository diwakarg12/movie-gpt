import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utility/constant';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../utility/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
