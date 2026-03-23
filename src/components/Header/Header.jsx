import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import classNames from "classnames";

const Header = () => {
  const getLinkClass = ({isActive})=> classNames(styles.link, {
    [styles.linkActiv] : isActive
  });
  return (
    <header className={styles.header}>
      <Link to="/">Logo</Link>
      <nav>
        <ul>
          <li>
            <NavLink className={getLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClass} to="/heros">
              Heros
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClass} to="/pizza">
              Pizza
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
