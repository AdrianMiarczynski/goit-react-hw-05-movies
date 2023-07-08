/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('SearchValue') ?? '';

  const featchDataSearch = async () => {
    const response = await api.featchMovieSearch(name);
    setMovies(response.results);
    console.log(response.results);
  };

  const hundlerSubmit = ev => {
    ev.preventDefault();
    const search = ev.target.search.value;
    setSearchParams({ SearchValue: search });
  };

  useEffect(() => {
    if (name !== '') {
      featchDataSearch();
    }
  }, [name]);

  return (
    <div>
      <form onSubmit={hundlerSubmit}>
        <input type="text" name="search" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};
