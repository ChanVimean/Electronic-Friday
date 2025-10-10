import ProductContext from "@/context/ProductContext";
import React, { useContext } from "react";


const Cart = () => {
  const { products } = useContext(ProductContext);

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Brand: {item.brand}</p>
            <p>Category: {item.category}</p>
            <p>Price: ₹{item.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
