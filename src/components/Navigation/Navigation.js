import routes from "../../routes/routes";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navLink}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <NavLink
            exact
            className="navLink"
            activeClassName="navLink--active"
            to={routes.home}
          >
            HomePage
          </NavLink>
        </nav>
        <nav className={styles.nav}>
          <NavLink
            className="navLink"
            activeClassName="navLink--active"
            to={routes.movies}
          >
            MoviesPage
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
