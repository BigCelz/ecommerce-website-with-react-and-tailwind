import React from "react";
import { Plus, Minus, X } from "lucide-react";

//cart component
export const Cart = ({ cart, updateQuantity, isCartOpen, toggleCart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } overflow-y-auto`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>

          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleCart}
          >
            <X size={24} />
          </button>
        </div>
        {cart.lenght === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <div>
            <ul className="mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center mb-4 pb-4 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  {/* after the image we add another div*/}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm mb-1">{item.ttle}</h3>
                    <p className="text-gray-600 text-sm mb-1">
                      ${item.price.toFixed(2)} each
                    </p>

                    <div className="items-center">
                      {/* minus button */}
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>

                      {/* for plus button */}
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold mb-1">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* remove button */}
                    <button className="text-red-500 hover:text-red-700 text-sm"
                     onClick={() => removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="font-semibold text-lg text-right">
               {/* total price */}
               Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
