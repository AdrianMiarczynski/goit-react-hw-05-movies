import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';

export const MovieTrending = () => {
  const [movies, setMovies] = useState([]);

  const featchData = async () => {
    const response = await api.featchMovieTrending();
    setMovies(response.results);
  };

  useEffect(() => {
    featchData();
  }, []);

  // console.log(movies);
  return (
    <ul>
      {movies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
};
