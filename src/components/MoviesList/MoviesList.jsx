import MovieItem from '../MovieItem';

import styles from './MoviesList.module.scss';

const MoviesList = ({ title, dataMovies }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.movies__list}>
        {dataMovies.map(({ id, title, poster_path }) => (
          <li className={styles.movies__item} key={id}>
            <MovieItem title={title} poster={poster_path} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
