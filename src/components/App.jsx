import { Route, Routes } from 'react-router-dom';

import { MovieTrending } from './MovieTrending';
import { MovieSearch } from './MovieSearch';
import { MovieCredits } from './MovieCredits';
import { MovieDetails } from './MovieDetails';
import { MovieReviews } from './MovieReviews';
import { NotFound } from './NotFound';
import { SharedLayout } from './SharkedLoyaut';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MovieTrending />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movies:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
