import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utility/constant';
import { useEffect } from 'react';
import { addPopularMovies } from '../utility/movieSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
