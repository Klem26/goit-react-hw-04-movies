import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.moviesGallery}>
      {movies.map((movie) => (
        <li className={styles.item} key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title && (
              <img
                className={styles.itemImage}
                src={
                  movie.poster_path &&
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.defaultProps = {
  poster_path: "",
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  location: PropTypes.object.isRequired,
};
