import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
