import { Component } from 'react';
import Loader from 'react-loader-spinner';

import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import api from '../utils/api';
import styles from './styles/MoviesPage.module.scss';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: null,
    isLoading: false,
    error: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      try {
        this.setState({ isLoading: true });
        this.setState({ error: '' });

        const response = await api.serchMovies(searchQuery);

        this.setState({ movies: response.data.results });
      } catch (err) {
        this.setState({ error: err });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmitForm = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <div className={styles.MoviesPage}>
        <SearchForm onSubmit={this.handleSubmitForm} />
        {isLoading && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {error && <h2 className={styles.error}>{error.message}</h2>}

        {movies && <MoviesList dataMovies={this.state.movies} />}
      </div>
    );
  }
}

export default MoviesPage;
