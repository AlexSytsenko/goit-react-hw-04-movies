import { Route, NavLink, useRouteMatch, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';

import styles from './AdditionalInfo.module.scss';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "Reviews" */),
);

const AdditionalInfo = () => {
  const { url, path } = useRouteMatch();

  return (
    <>
      <div className={styles.info}>
        <h4>Additional information</h4>
        <NavLink
          to={`${url}/cast`}
          className={styles.link}
          activeClassName={styles.active}
        >
          Cast
        </NavLink>

        <NavLink
          to={`${url}/reviews`}
          className={styles.link}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Suspense
        fallback={<Loader type="Puff" color="#00BFFF" height={70} width={70} />}
      >
        <Switch>
          <Route exact path={`${path}/cast`} component={Cast} />
          <Route exact path={`${path}/reviews`} component={Reviews} />
        </Switch>
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
