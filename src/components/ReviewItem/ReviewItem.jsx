import PropTypes from 'prop-types';

const ReviewItem = ({ author, content }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{content}</p>
    </div>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
