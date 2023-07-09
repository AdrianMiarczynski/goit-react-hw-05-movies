import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  // const location = useLocation();
  // const backLink = location.state?.from ?? '/';

  const fetchDataDetails = async id => {
    const response = await api.featchMovie(id);
    console.log(response);
    setMovie(response);
  };

  useEffect(() => {
    fetchDataDetails(id);
  }, [id]);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt="Movie"
        />
        <div>
          <h2>{movie.title}</h2>
          User Score: {movie.vote_average}%<h5>Overview</h5> {movie.overview}
          <h4>Genres</h4>
        </div>
      </div>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="credits">Credits</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
