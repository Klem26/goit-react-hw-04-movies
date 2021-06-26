import PropTypes from "prop-types";

import styles from "./Review.module.css";

const Review = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li className={styles.reviewsItems} key={review.id}>
          <h3 className={styles.title}>{review.author}</h3>
          <p className={styles.descr}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Review;

Review.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
