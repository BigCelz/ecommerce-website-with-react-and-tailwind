import React from "react";
import { ShoppingCart } from "lucide-react";

export const CartIcon = ({ toggleCart, cart }) => {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button onClick={toggleCart} className="relative p-2">
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute top-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
    </button>
  );
};
