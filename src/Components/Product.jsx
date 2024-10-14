import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

//product component
export const Product = ({ product, addToCart, setSelectedProduct }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  //for category color
  const getCategoryColor = (category) => {
    const colors = {
      electronics: "bg-blue-500",
      jewelry: "bg-blue-500",
      "men's clothing": "bg-blue-500",
      "women's clothing": "bg-pink-500",
    };
    return colors[category] || "bg-gray-500";
  };

  //add to cart function
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); //hide tooltip after 2 seconds
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative">
      <div
        className={`absolute top-2 right-2 ${getCategoryColor(
          product.category
        )} text-white text-xs font-bold px-2 py-1 rounded-full`}
      >
        {product.category}
      </div>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4 rounded"
        onClick={() => setSelectedProduct(product)}
      />

      <h3
        className="text-lg font-semibold mb-2 truncate"
        onClick={() => setSelectedProduct(product)}
      >
        {product.title}
      </h3>

      <p className="text-grey-600" onClick={() => setSelectedProduct(product)}>
        ${product.price.toFixed(2)}
      </p>

      {/* add to cart button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        onClick={handleAddToCart}
      >
        Add to Cart
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 translate-x-12 mb-2 px-3 py-1 bg-green-500 text-sm rounded-md shadow-lg whitespace-nowrap">
            <CheckCircle className="inline-block mr-1" size={16} />
            Added to Cart!
          </div>
        )}
      </button>
    </div>
  );
};
