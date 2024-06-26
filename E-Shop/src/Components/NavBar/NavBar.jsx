import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyles = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.link_active}` : styles.link;
  return (
    <nav className={styles.nav}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default NavBar;
