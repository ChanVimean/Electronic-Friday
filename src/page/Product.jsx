import ViewMore from "@/components/ViewMore";
import ProductContext from "@/context/ProductContext";
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="max-w-7xl mx-auto px-2 py-12">
      <h1 className="font-bold text-4xl">Products</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <li key={index} className="bg-blue-200 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt="Product Image"
              className="object-cover h-60 w-full bg-white"
            />

            <article className="p-4">
              <h2>{product.name}</h2>
              <p>{product.brand}</p>
              <p>{product.category}</p>
              <p>${product.price.toFixed(2)}</p>
              <div className="flex justify-between">
                <button>
                  <FaCartPlus />
                </button>
                <ViewMore id={product.id} />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
