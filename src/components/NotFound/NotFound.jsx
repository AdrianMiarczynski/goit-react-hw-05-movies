import React from 'react';
import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
export const NotFound = () => {
  return (
    <div className={css.error}>
      <h1 className={css.header}>NotFound</h1>
      <p className={css.paragraph}>
        There is nothing hear please go to Homepage
      </p>
      <button className={css['btn__notfound']}>
        <Link className={css.link} to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};
export default NotFound;
