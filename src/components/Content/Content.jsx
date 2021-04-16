import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import routes from '../routes';
import styles from './Content.module.scss';

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const Content = () => {
  return (
    <div className={styles.content}>
      <Suspense
        fallback={<Loader type="Puff" color="#00BFFF" height={70} width={70} />}
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
