import styles from './MovieCard.module.scss';

const MovieCard = ({ data }) => {
  const {
    poster_path,
    genres,
    title,
    release_date,
    vote_average,
    overview,
  } = data;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className={styles.movie__details}>
      <img className={styles.img} src={imgUrl} alt={title} />
      <div className={styles.movie__info}>
        <h2 className={styles.title}>{title}</h2>
        <h3>Vote average</h3>
        <p>{vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.reduce((total, item) => total + ' ' + item.name, '')}</p>
        <h3>Release date</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
