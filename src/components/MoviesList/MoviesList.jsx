import { Link, useLocation } from 'react-router-dom';

// import routes from '../routes';
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

export default MoviesList;
