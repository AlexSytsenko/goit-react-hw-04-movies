import { Component } from 'react';

import styles from './SearchForm.module.scss';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    const { query } = this.state;

    e.preventDefault();
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  handleInputChange = e => {
    const { value } = e.target;

    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;

    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={this.handleInputChange}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
