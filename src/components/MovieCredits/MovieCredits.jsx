/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCredits.module.css';

export const MovieCredits = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const fetchMovieCredits = async () => {
    const response = await api.featchMovieCredits(movieId);
    setMovie(response.cast);
  };
  useEffect(() => {
    fetchMovieCredits(movieId);
  }, [movieId]);

  return (
    <ul className={css['movie-list']}>
      {movie.map(person => (
        <li key={person.id} className={css['list-item-perosn']}>
          <img
            className={css['img-person']}
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
          />
          <span className={css.person}>Name:{person.name}</span>
          <span className={css.person}>Character:{person.character}</span>
        </li>
      ))}
    </ul>
  );
};
export default MovieCredits;
