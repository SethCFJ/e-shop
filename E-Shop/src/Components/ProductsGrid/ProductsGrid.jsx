import React from "react";
import styles from "./ProductsGrid.module.scss";
import { useState, useEffect } from "react";
import { getShopCollection } from "../../services/shop-service";
import heartFill from "../../assets/heartFill.png";
import heart from "../../assets/heart.png";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  useEffect(() => {
    getShopCollection()
      .then((data) => setProducts(data))
      .catch((e) => console.warn(e.message));
  }, []);

  const handleAddToCart = (productId) => {
    addToCart(productId, 1);
  };
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div className={styles.container} key={product.id}>
          <div className={styles.heading}>
            <h1 className={styles.nameText}>{product.name}</h1>
            {product.favourited ? (
              <img className={styles.favouriteImg} src={heartFill} />
            ) : (
              <img className={styles.favouriteImg} src={heart} />
            )}
          </div>
          <Link to={`/products/${product.id}`}>
            <img
              className={styles.img}
              src={product.imageLink}
              alt={product.name}
            />
          </Link>
          <h3 className={styles.price}>${product.price}</h3>
          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            className={styles.addToCart}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
