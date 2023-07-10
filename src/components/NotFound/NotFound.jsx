import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>NotFound</h1>
      <p>this is NotFound page</p>
      <button>
        <Link to="/">Go to Home page</Link>
      </button>
    </div>
  );
};
export default NotFound;
