/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  console.log(movie);
  return (
    <ul>
      {movie.map(person => (
        <li key={person.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
          />
          <span>Name:{person.name}</span>
          <span>Character:{person.character}</span>
        </li>
      ))}
    </ul>
  );
};
export default MovieCredits;
