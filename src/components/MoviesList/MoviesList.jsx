import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieItem from '../MovieItem';
import styles from './MoviesList.module.scss';

const MoviesList = ({ title, dataMovies }) => {
  const location = useLocation();

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.movies__list}>
        {dataMovies.map(({ id, title, poster_path }) => (
          <li className={styles.movies__item} key={id}>
            <Link
              to={{
                pathname: `movies/${id}`,
                state: { from: location },
              }}
            >
              <MovieItem title={title} id={id} poster={poster_path} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.defaultProps = {
  title: '',
  data: {
    poster_path: null,
    genres: ['No info'],
    title: '',
    release_date: '--',
    vote_average: 0,
    overview: '',
  },
};

MoviesList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    genres: PropTypes.array,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
};

export default MoviesList;
