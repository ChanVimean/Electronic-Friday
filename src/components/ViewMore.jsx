import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ProductContext from "@/context/ProductContext";
import { FaCartPlus } from "react-icons/fa6";

const ViewMore = ({ id }) => {
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === id);

  return (
    <Dialog>
      <DialogTrigger className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        View
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto p-5 bg-white rounded-xl shadow-lg">
        <DialogHeader className="flex flex-col items-center gap-4">
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-lg"
          />

          {/* Product name */}
          <DialogTitle className="text-2xl font-bold text-gray-800 text-center">
            {product.name}
          </DialogTitle>

          {/* Product details */}
          <DialogDescription className="text-gray-600 text-center">
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p className="mt-2 font-semibold text-gray-900">
              Price: ${product.price.toFixed(2)}
            </p>
          </DialogDescription>
        </DialogHeader>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <FaCartPlus /> Add to Cart
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMore;
