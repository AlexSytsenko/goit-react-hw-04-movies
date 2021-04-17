import PropTypes from 'prop-types';

import styles from './ActorCard.module.scss';
import defaultImg from '../../images/default-person.png';

const ActorCard = ({ name, poster }) => {
  const imgUrl = poster
    ? `https://image.tmdb.org/t/p/w500/${poster}`
    : defaultImg;

  return (
    <div>
      <img className={styles.img} src={imgUrl} alt={name} />
      <h4 className={styles.title}>{name}</h4>
    </div>
  );
};

ActorCard.defaultProps = {
  poster: null,
};

ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default ActorCard;
