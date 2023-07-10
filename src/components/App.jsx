import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/leader';
import { SharedLayout } from './SharkedLoyaut';

// import { MovieTrending } from './MovieTrending';
// import { MovieSearch } from './MovieSearch';
// import { MovieDetails } from './MovieDetails';
// import { MovieCredits } from './MovieCredits';
// import { MovieReviews } from './MovieReviews';
// import { NotFound } from './NotFound';

const Home = lazy(() => import('./MovieTrending/MovieTrending'));
const MovieSearch = lazy(() => import('./MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const MovieCredits = lazy(() => import('./MovieCredits/MovieCredits'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/movies" element={<MovieSearch />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="credits" element={<MovieCredits />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
