import React from "react";
import { useState, useEffect } from "react";
import { getShopCollection } from "../../services/shop-service";
import styles from "./ProductsPage.module.scss";
import ProductsGrid from "../../Components/ProductsGrid/ProductsGrid";
import Heading from "../../Components/Heading/Heading";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <Heading text="Products" />
      <ProductsGrid />
    </div>
  );
};

export default ProductsPage;
