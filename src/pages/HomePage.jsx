import { Component } from 'react';
import axios from 'axios';

import MoviesList from '../components/MoviesList';

class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=0e6eebd27dfd68a7c4ec96f04756cc6c&page=1&language=en-US`,
    );

    this.setState({ movies: response.data.results });

    console.log(response.data.results);
  }

  render() {
    return (
      <>
        <MoviesList title="Trending today" dataMovies={this.state.movies} />
      </>
    );
  }
}

export default Home;
