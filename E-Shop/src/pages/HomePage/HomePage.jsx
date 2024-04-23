import React from "react";
import { getShopCollection } from "../../services/shop-service";
import { useEffect, useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import styles from "./HomePage.module.scss";
import Heading from "../../Components/Heading/Heading";
import logo from "../../assets/logo.png";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getShopCollection()
      .then((data) => setProducts(data))
      .catch((e) => console.warn(e.message));
  }, []);
  return (
    <div className={styles.container}>
      <Heading text={"Featured Products"} />

      <Carousel data={products} />
    </div>
  );
};

export default HomePage;
