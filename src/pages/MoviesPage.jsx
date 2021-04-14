import { Component } from 'react';
import axios from 'axios';

import MoviesList from '../components/MoviesList';
import styles from './MoviesPage.module.scss';

import SearchForm from '../components/SearchForm';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=0e6eebd27dfd68a7c4ec96f04756cc6c&page=1&language=en-US`,
      );

      this.setState({ movies: response.data.results });

      console.log(response.data.results);
    }
  }

  handleSubmitForm = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className={styles.MoviesPage}>
        <SearchForm onSubmit={this.handleSubmitForm} />
        {movies && <MoviesList dataMovies={this.state.movies} />}
      </div>
    );
  }
}

export default MoviesPage;
