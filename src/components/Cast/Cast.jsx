import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import api from '../../utils/api';
import ActorCard from '../ActorCard';
import styles from './Cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    async function getData() {
      try {
        const response = await api.getMovieCast(movieId);

        setCast(response.data.cast);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []); // eslint-disable-line

  return (
    <>
      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      )}
      {error && <h2 className={styles.error}>{error.message}</h2>}
      <ul className={styles.list}>
        {cast.map(item => (
          <li className={styles.card} key={item.id}>
            <ActorCard name={item.name} poster={item.profile_path} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;

//id, name, profile_path
