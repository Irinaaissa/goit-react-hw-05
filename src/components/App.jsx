import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./Navigation/Navigation";
// import HomePage from '../pages/HomePages/HomePage'
// import MoviesPage from '../pages/MoviesPage'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'
// import MovieCast from './MovieCasts/MovieCast'
// import MovieReviews from './MoviesReviews/MovieReviews'

const HomePage = lazy(() => import("../pages/HomePages/HomePage"));
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MoviesReviews/MovieReviews"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
