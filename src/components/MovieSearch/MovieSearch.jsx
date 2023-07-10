/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('SearchValue') ?? '';
  const location = useLocation();

  const featchDataSearch = async () => {
    const response = await api.featchMovieSearch(name);
    setMovies(response.results);
  };

  const hundlerSubmit = ev => {
    ev.preventDefault();
    const search = ev.target.search.value;
    setSearchParams({ SearchValue: search });
    // search.reset();
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
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
