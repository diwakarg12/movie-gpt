// import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Gptlang } from '../../utility/langConstant';
import { useRef } from 'react';
import openai from '../../utility/openai';
import { API_OPTIONS } from '../../utility/constant';
import { addGptMovies } from '../../utility/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query="${movie}"&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();
    console.log(searchText.current.value);
    const getQuerry = `Act as a movie recommendation system and suggest some movies for the querry: ${searchText.current.value}. only give me name of 5 movies, comma seperated like the example result given ahead. Example result: Gaddar, Koi mil gya, coolie, vivah, animal.`;

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', context: getQuerry }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResult.choices);

    if (!gptResult.choices) {
      //TODO: Write error handling
    }

    const gptMovies = gptResult.choices?.[0]?.message?.content.split(',');

    const moviePromiseArray = gptMovies.map((movie) => searchMovie(movie));
    const movieResult = await Promise.all(moviePromiseArray);
    console.log(movieResult);

    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: movieResult })
    );
  };

  return (
    <div className='bg-black bg-opacity-50 bg-blend-multiply'>
      <form
        className='w-3/5 py-40 m-auto rounded-md text-white grid grid-cols-12'
        onSubmit={handleGptSearch}
      >
        <input
          type='text'
          ref={searchText}
          name='search'
          className='col-span-9 bg-transparent text-white mx-2 border p-3 font-medium placeholder:font-medium placeholder:text-white rounded-sm focus:outline-none'
          placeholder={Gptlang[langKey].gptSearchPlaceholder}
        />
        <button
          type='submit'
          className='col-span-3 bg-red-700 rounded-sm py-2 mx-2 font-semibold text-lg hover:bg-opacity-80'
        >
          {Gptlang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
