import axios from 'axios';

const apiKey = '0e6eebd27dfd68a7c4ec96f04756cc6c';
const language = 'en-US';

const getTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=1&language=${language}`,
  );
};

const serchMovies = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=${language}&page=1&include_adult=false`,
  );
};

const getMovieDetails = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`,
  );
};

const getMovieCast = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=${language}`,
  );
};

// eslint-disable-next-line
export default {
  getTrendingMovies,
  serchMovies,
  getMovieDetails,
  getMovieCast,
};
