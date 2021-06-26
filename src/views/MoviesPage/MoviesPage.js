import { Component } from "react";
import api from "../../servicesApi/servicesApi";
import MoviesList from "../../components/MoviesList/MoviesList";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    value: "",
    movies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      const query = this.props.location.search.replace("?query=", "");
      this.makeRequestByName(query);
    }
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };
  submitSearch = (e) => {
    e.preventDefault();
    this.makeRequestByName(this.state.value);
  };

  makeRequestByName = async (query) => {
    const response = await api.fetchMovieByName(query);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
    this.setState({ value: "", movies: response.data.results });
  };

  render() {
    return (
      <>
        <h1 className={styles.title}> Search movie </h1>
        <div className={styles.wrapper}>
          <form className={styles.searchForm} onSubmit={this.submitSearch}>
            <input
              className={styles.searchFormInput}
              type="text"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <button className={styles.searchFormBtn} type="submit">
              <span className={styles.searchFormBtnLabel}></span>
            </button>
          </form>

          <MoviesList
            movies={this.state.movies}
            location={this.props.location}
          />
        </div>
      </>
    );
  }
}
export default MoviesPage;
