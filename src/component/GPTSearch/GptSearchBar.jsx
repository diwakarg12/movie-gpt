// import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { Gptlang } from '../../utility/langConstant';
import { useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { API_OPTIONS } from '../../utility/constant';
import { addGptMovies } from '../../utility/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

  const searchMovie = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query="${movie}"&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();

    const getQuerry = `Act as a movie or series recommendation system and suggest some movies for the querry: ${searchText.current.value}. only give me name of 5 movies, comma seperated like the example result given ahead. Example result: Gaddar, Koi mil gya, coolie, vivah, animal.`;

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(getQuerry);
    const response = await result.response;
    const text = response.text();
    if (!text) {
      //TODO: Write error handling
    }

    const gptMovies = text.split(',');
    console.log(gptMovies);

    const moviePromiseArray = gptMovies.map((movie) => searchMovie(movie));
    const movieResult = await Promise.all(moviePromiseArray);
    console.log(movieResult);
    const availableMovies = movieResult.filter((movie) => movie.length !== 0);
    console.log('Available Movies : ', availableMovies);

    const res = dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: availableMovies })
    );
    console.log(res);
  };

  return (
    <div className='bg-black bg-opacity-50 bg-blend-multiply'>
      <div className='md:w-[70%] w-full py-40 m-auto rounded-md text-white'>
        <h1 className='text-[2.5rem] text-center font-semibold pl-2 pb-8 '>
          Search For Your Movie With Names, Genres or Storyline
        </h1>

        <form className='grid grid-cols-12' onSubmit={handleGptSearch}>
          <input
            type='text'
            ref={searchText}
            name='search'
            className='col-span-8 bg-transparent text-white mx-2 border p-3 font-medium placeholder:font-medium placeholder:text-white rounded-sm focus:outline-none'
            placeholder={Gptlang[langKey].gptSearchPlaceholder}
          />
          <button
            type='submit'
            className='col-span-4 bg-[#1fc386] rounded-sm py-2 mx-2 font-semibold text-lg hover:bg-opacity-80'
          >
            {Gptlang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
