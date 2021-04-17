import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import ReviewItem from '../ReviewItem';
import api from '../../utils/api';
import styles from './Reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    async function getData() {
      try {
        const response = await api.getMovieReviews(movieId);

        setReviews(response.data.results);
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
      {reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => (
            <li className={styles.card} key={id}>
              <ReviewItem author={author} content={content} />
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
