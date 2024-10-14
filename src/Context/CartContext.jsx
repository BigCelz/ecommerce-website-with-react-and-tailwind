import React, { useEffect, useState, createContext } from "react";

export const CartContext = createContext();

//cartProvider component
export const CartProvider = ({ children }) => {
  //load the cart from loacl storage to initial render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  //save the cart to localstorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //addtcart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return[...prevCart, {...product, quantity : 1}]
    });
  };

  //remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  //update cart quantity function
  const updateQuantity = (productId, newQuantity) => {
    if(newQuantity < 1) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => 
          item.id === productId ? {...item, quantity : newQuantity} : item
        )
      )
    }
  }

  //toggle cart
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  }

  return(
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, isCartOpen, toggleCart, updateQuantity,
    }}>
      {children}
    </CartContext.Provider>
  )
};
