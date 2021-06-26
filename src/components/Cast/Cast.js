import PropTypes from "prop-types";
import defaultCastImg from "../../images/black-cat.gif";

import styles from "./Cast.module.css";
const Cast = ({ cast }) => {
  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.items}>
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <li className={styles.castItems} key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultCastImg
                }
                alt={name}
                width="200"
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.noInfoTitle}>No Info</h2>
      )}
    </>
  );
};

export default Cast;

Cast.defaultProps = {
  cast: [],
  profile_path: "",
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
