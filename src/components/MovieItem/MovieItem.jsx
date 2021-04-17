import PropTypes from 'prop-types';

const MovieItem = ({ title, poster }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster}`;
  return (
    <>
      <img src={imgUrl} alt=""></img>
      <h3>{title}</h3>
    </>
  );
};

MovieItem.defaultProps = {
  poster: null,
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default MovieItem;
