const MovieItem = ({ title, poster }) => {
  console.log(poster);

  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster}`;
  return (
    <>
      <img src={imgUrl} alt=""></img>
      <h3>{title}</h3>
    </>
  );
};

export default MovieItem;
