import { Component } from "react";
import api from "../../servicesApi/servicesApi";
import MoviesList from "../../components/MoviesList/MoviesList";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await api
      .fetchTrendingMovies()
      .then((response) => response.data.results);

    this.setState({ movies: response });
  }

  render() {
    return (
      <div className={styles.container}>
        <MoviesList movies={this.state.movies} location={this.props.location} />
      </div>
    );
  }
}

export default HomePage;
