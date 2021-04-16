const MovieItem = ({ title, poster }) => {
  // const location = useLocation();
  // const needid = useRouteMatch();

  // console.log(location);

  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster}`;
  return (
    <>
      <img src={imgUrl} alt=""></img>
      <h3>{title}</h3>
    </>
  );
};

export default MovieItem;
