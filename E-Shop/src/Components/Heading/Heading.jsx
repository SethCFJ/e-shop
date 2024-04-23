import React from "react";
import styles from "./Heading.module.scss";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
const Heading = ({ text }) => {
  return (
    <div className={styles.container}>
      <Link to={`/`}>
        <img className={styles.img} src={logo} alt="Logo" />
      </Link>
      <h1 className={styles.title}>{text}</h1>
      <Link to={`/checkout`}>
        <img className={styles.cart} src={cart} alt="Cart" />
      </Link>
    </div>
  );
};

export default Heading;
