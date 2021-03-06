import { NavLink } from 'react-router-dom';

import routes from '../routes';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        exact
        to={routes.home}
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={styles.link}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
