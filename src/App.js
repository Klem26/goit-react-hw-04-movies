import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "./routes/routes";
import Loader from "./components/Loader";
import AppBar from "./components/AppBar/";
import "./App.css";

const AsyncHomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "Home-Page" */)
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "Movie-Details-Page" */
  )
);
const AsyncMoviesPage = lazy(() =>
  import(
    "./views/MoviesPage/MoviesPage.js" /* webpackChunkName: "Movies-Page" */
  )
);

function App() {
  return (
    <div className="container">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={AsyncHomePage} />
          <Route path={routes.movieDetails} component={AsyncMovieDetailsPage} />
          <Route path={routes.movies} component={AsyncMoviesPage} />

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
