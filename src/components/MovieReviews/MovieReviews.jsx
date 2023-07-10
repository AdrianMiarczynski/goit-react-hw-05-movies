import { api } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchMovieReviews = async movieId => {
    const respon = await api.featchMovieReviews(movieId);
    setReviews(respon.results);
  };
  useEffect(() => {
    fetchMovieReviews(movieId);
  }, [movieId]);

  if (reviews.length === 0) return <h3>Sorry ther is not reviews yet</h3>;
  return (
    <div>
      <h1 className={css.paragraph}>MovieReviews</h1>
      <ul className={css['list-reviev']}>
        {reviews.map(reviev => {
          return (
            <li key={reviev.id} className={css['list-reviev-item']}>
              <h4>Author: {reviev.author}</h4>
              <p>{reviev.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
