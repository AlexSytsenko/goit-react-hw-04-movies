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

export default ActorCard;

// const url = imgUrl ? `https://image.tmdb.org/t/p/w500/${imgUrl}` : defaultImg;
