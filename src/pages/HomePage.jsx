import { Component } from 'react';

import Loader from 'react-loader-spinner';
import api from '../utils/api';
import MoviesList from '../components/MoviesList';
import styles from './styles/HomePage.module.scss';

class Home extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: '',
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const response = await api.getTrendingMovies();

      this.setState({ movies: response.data.results });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, error } = this.state;

    return (
      <div className={styles.home}>
        {isLoading && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {error && <h2 className={styles.error}>{error.message}</h2>}
        <MoviesList title="Trending today" dataMovies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
