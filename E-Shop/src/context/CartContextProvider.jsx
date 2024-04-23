import React from "react";
import { createContext, useState, useContext } from "react";
import { getShopCollection } from "../services/shop-service";
export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        cartQty: updatedCart[existingItemIndex].cartQty + quantity,
      };

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, cartQty: 1 }]);
    }
    console.log(cart);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  const providedValues = { cart, addToCart, removeFromCart };
  return (
    <CartContext.Provider value={providedValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
