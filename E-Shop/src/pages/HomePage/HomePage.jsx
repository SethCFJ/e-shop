import React from "react";
import { getShopCollection } from "../../services/shop-service";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getShopCollection()
      .then((data) => setProducts(data))
      .catch((e) => console.warn(e.message));
  }, []);
  return (
    <div>
      <h1>Homepage</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <h3>{product.quantity}</h3>
          <h3>{product.price}</h3>
          <ul>
            {product.variant.map((vari) => (
              <li key={vari}>{vari}</li>
            ))}
          </ul>
          {product.favourited ? <h1>favourited</h1> : <h1>not favourite</h1>}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
