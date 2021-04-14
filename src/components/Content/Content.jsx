import { Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
    </div>
  );
};

export default Content;
