import React, { useContext, useState } from "react";
import styles from "./ProductPage.module.scss";
import heart from "../../assets/heart.png";
import heartFill from "../../assets/heartFill.png";
import Heading from "../Heading/Heading";
import { CartContext, useCart } from "../../context/CartContextProvider";

const ProductPage = ({ product }) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const increaseQty = () => {
    if (product.quantity === qty + 1) {
      throw new Error("Not enough stock");
    }
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1);
  };
  const handleAddToCart = () => {
    addToCart(product, qty);
  };
  return (
    <div>
      <Heading />
      <div className={styles.page}>
        <div className={styles.container} key={product.id}>
          <div className={styles.container__header}>
            {product.favourited ? (
              <img
                className={styles.container__header__favouriteImg}
                src={heartFill}
              />
            ) : (
              <img
                className={styles.container__header__favouriteImg}
                src={heart}
              />
            )}
          </div>
          <div className={styles.content}>
            <img
              className={styles.img}
              src={product.imageLink}
              alt={product.name}
            />
            <div className={styles.container__innerContainer}>
              <h1 className={styles.container__innerContainer__name}>
                {product.name}
              </h1>
              <h3 className={styles.container__price}>${product.price}</h3>
              <h2 className={styles.text} style={{ color: "white" }}>
                Variants:
              </h2>
              <select className={styles.select}>
                {product.variant.map((vari) => (
                  <option
                    className={styles.variants}
                    style={{ backgroundColor: `${vari}` }}
                    key={vari}
                  >
                    {vari}
                  </option>
                ))}
              </select>
              <div className={styles.addToCartContainer}>
                <span>
                  <div
                    className={styles.container__innerContainer__qtyInput}
                    placeholder="1"
                  >
                    <button
                      className={
                        styles.container__innerContainer__qtyInput__buttons
                      }
                      onClick={decreaseQty}
                    >
                      -
                    </button>
                    {qty}
                    <button
                      className={
                        styles.container__innerContainer__qtyInput__buttons
                      }
                      onClick={increaseQty}
                    >
                      +
                    </button>
                  </div>
                </span>
                <button
                  onClick={handleAddToCart}
                  className={styles.addToCartContainer__button}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
