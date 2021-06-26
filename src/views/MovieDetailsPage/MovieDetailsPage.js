import { Route } from "react-router";
import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes/routes";
import Cast from "../../components/Cast/Cast";
import Review from "../../components/Review/Review";
import styles from "./MovieDetailsPage.module.css";

const baseURL = "https://api.themoviedb.org/3";
const Api_Key = "223b095fe306258b643bf291f91ba2e0";

class MovieDetailsPage extends Component {
  state = {
    original_title: "",
    genres: [],
    release_date: "",
    backdrop_path: "",
    poster_path: "",
    overview: "",
    vote_average: "",
    cast: [],
    review: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const movie = await axios.get(
      `${baseURL}/movie/${movieId}?api_key=${Api_Key}&language=en-US`
    );
    const cast = await axios.get(
      `${baseURL}/movie/${movieId}/credits?api_key=${Api_Key}&language=en-US`
    );
    const review = await axios.get(
      `${baseURL}/movie/${movieId}/reviews?api_key=${Api_Key}&language=en-US&page=1`
    );

    this.setState({
      ...movie.data,
      cast: cast.data.cast,
      review: review.data.results,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { original_title, genres, release_date, poster_path, overview } =
      this.state;
    const { match } = this.props;

    return (
      <>
        <button
          className={styles.btnGoBack}
          type="button"
          onClick={this.handleGoBack}
        >
          {" "}
          Go back
        </button>
        <div className={styles.movieDetailsContainer}>
          <div className={styles.movie__info}>
            <img
              className={styles.itemImage}
              src={
                poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt={this.state.original_title}
            />
            <div className={styles.movie__description}>
              <h1 className={styles.title}>{`${original_title}(${
                release_date.split("-")[0]
              })`}</h1>
              <h2 className={styles.title}>Overview</h2>
              <p className={styles.description}>{overview}</p>
              <h2 className={styles.title}>Genres</h2>
              <ul className={styles.movie__additional_list}>
                {genres.map((genre) => (
                  <li className={styles.items} key={genre.id}>
                    {genre.name}{" "}
                  </li>
                ))}{" "}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.movieDetailsContainer}>
          <h2 className={styles.title}>More information</h2>
          <ul className={styles.movie__additional_list}>
            <li>
              <NavLink className={styles.itemsLink} to={`${match.url}/cast`}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.itemsLink} to={`${match.url}/reviews`}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <Route
            path={routes.cast}
            render={(props) => {
              return <Cast {...props} cast={this.state.cast} />;
            }}
          />
          <Route
            path={routes.review}
            render={(props) =>
              this.state.review.length ? (
                <Review {...props} reviews={this.state.review} />
              ) : (
                <p className={styles.description}>No reviews</p>
              )
            }
          />
        </div>
      </>
    );
  }
}
export default MovieDetailsPage;
