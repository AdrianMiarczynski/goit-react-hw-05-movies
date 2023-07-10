import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const fetchDataDetails = async movieId => {
    const response = await api.featchMovie(movieId);
    setMovie(response);
  };

  useEffect(() => {
    fetchDataDetails(movieId);
  }, [movieId]);

  const { title, vote_average, poster_path, overview, genres } = movie;

  const genresHange = () => {
    if (Array.isArray(genres)) {
      return genres.map(movie => movie.name).join(' ');
    } else {
      return 'No genres available';
    }
  };

  return (
    <div className={css.wrapper}>
      <Link to={backLink}><button className={css.btn}> Go back</button></Link>
      <div className={css['details-wrapper']}>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
          alt="Movie"
        />
        <div className={css['movie-details']}>
          <h2>{title}</h2>
          User Score: {vote_average}%<h5>Overview</h5> {overview}
          <h4>Genres</h4>
          <div className={css.genres}>{genresHange(genres)}</div>
        </div>
      </div>
      <h4 className={css.paragraph}>Additional information</h4>
      <ul className={css['list-movie']}>
        <li>
          <Link className={css['movie-details']} to="credits">
            Credits
          </Link>
        </li>
        <li>
          <Link className={css['movie-details']} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
