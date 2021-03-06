import { useLocation, useHistory, useRouteMatch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import routes from '../components/routes';
import api from '../utils/api';
import MovieCard from '../components/MovieCard';
import AdditionalInfo from '../components/AdditionalInfo';
import styles from './styles/MovieDetailsPage.module.scss';

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const { movieId } = match.params;

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState('');
  const [path, setPath] = useState(routes.home);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setPath(location?.state?.from.pathname);
    setQuery(location.state?.query);
    setIsLoading(true);

    async function getData() {
      try {
        const response = await api.getMovieDetails(movieId);

        setMovieDetails(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []); // eslint-disable-line

  // const handleGoBack = () => {
  //   history.push(path || routes.home);
  // };

  return (
    <div className={styles.container}>
      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {error && <h2 className={styles.error}>{error.message}</h2>}

      <Link
        to={{
          pathname: path,
          state: { query: query },
        }}
      >
        <button className={styles.btn__goBack}>Go back</button>
      </Link>

      {movieDetails && <MovieCard data={movieDetails} />}
      <AdditionalInfo />
    </div>
  );
};

export default MovieDetailsPage;
