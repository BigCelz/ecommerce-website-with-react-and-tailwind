import React, { useState } from "react";
import { X, Star, CheckCircle } from "lucide-react";

//product detail component
export const ProductDetail = ({ product, onClose, onAddtoCart }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  //add tocart fuction
  const handleAddToCart = () => {
    onAddtoCart(product);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); //hide tooltip after 2 seconds
  };

  return (
    <div className="fixed inset-o bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-grow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 object-contain h-64 md:h-auto mb-4 md:mb-0 md:r-6"
          />
          <div className="flex-1">
            <h2 className="text-2xl fond-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-2">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Category: {product.category}
            </p>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 mr-1" size={20} />
              <span>
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            {/* add to cart button */}
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-green-500 text-white text-sm rounded-md shadow-lg whitespace-nowrap">
                  <CheckCircle className="inline-block mr-1" size={16} />
                  Added to Cart!
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
