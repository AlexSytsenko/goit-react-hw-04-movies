// import styles from './ReviewItem.module.scss';

const ReviewItem = ({ author, content }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ReviewItem;
