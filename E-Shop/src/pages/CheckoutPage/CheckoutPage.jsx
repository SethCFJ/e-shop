import React from "react";
import styles from "./CheckoutPage.module.scss";
import Heading from "../../Components/Heading/Heading";
import { useCart } from "../../context/CartContextProvider";
import heart from "../../assets/heart.png";
import heartFill from "../../assets/heartFill.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    // Calculate total cost when cart changes
    const calculateTotalCost = () => {
      const total = cart.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      setTotalCost(total);
    };

    calculateTotalCost();
  }, [cart]);
  return (
    <div className={styles.grid}>
      <Heading text={"Your Cart"} />
      {cart.length === 0
        ? console.log("empty")
        : cart.map((product) => (
            <div className={styles.itemContainer} key={product.id}>
              <div className={styles.itemRow}>
                <Link to={`/products/${product.id}`}>
                  <img
                    className={styles.img}
                    src={product.imageLink}
                    alt={product.name}
                  />
                </Link>
                <h1>{product.name}</h1>
                <div>
                  <h3>Each</h3>
                  <h3 className={styles.price}>${product.price}</h3>
                </div>
                <div>
                  <h3>Quantity</h3>
                  <h3 className={styles.price}>{product.cartQty}</h3>
                </div>
                <div>
                  <h3>Total</h3>
                  <h3 className={styles.price}>
                    ${product.cartQty * product.price}
                  </h3>
                </div>
              </div>
              <span>
                <h5>Edit</h5>
                <h5>Remove</h5>
              </span>
            </div>
          ))}
      <div className={styles.checkoutContainer}>
        <h3 className={styles.checkoutContainer__totalText}>
          Total Cost: ${totalCost}
        </h3>
        <button className={styles.checkoutContainer__button}>Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
