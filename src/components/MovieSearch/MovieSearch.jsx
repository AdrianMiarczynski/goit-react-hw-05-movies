/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './MovieSearch.module.css';

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
      <form onSubmit={hundlerSubmit} className={css.form}>
        <input className={css.input} type="text" name="search" placeholder="Search movies" />
        <button className={css['btn_submit']} type="submit">Search</button>
      </form>
      <ul className={css['title_list']}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={css['list_items']}>
              <Link className={css['items_link']} to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieSearch;
