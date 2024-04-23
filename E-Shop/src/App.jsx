import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import HomePage from "./pages/HomePage/HomePage";
import { getShopCollection } from "./services/shop-service";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductLoader from "./Containers/ProductLoader/ProductLoader";
import CartContextProvider from "./context/CartContextProvider";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductLoader />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
