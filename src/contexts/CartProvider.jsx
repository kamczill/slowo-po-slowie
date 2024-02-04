import React, { useState, useEffect } from 'react';
import CartContext from './cartContext';
import { products } from '../data/products';
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  const addToCart = (item) => {
      const isItemInCart = checkIfItemIsInCart(item)
      if (isItemInCart) return
      const newItem = {
        id: item.id,
        quantity: 1
      }
      const updatedCart = [...cart, newItem];
      setCart(updatedCart)
  }

  const updateItemQuantity = (item, quantity) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });
    setCart(updatedCart)
  };

  const removeItemFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart)
  };

  const checkIfItemIsInCart = (item) =>  Boolean(cart.find(cartItem => cartItem.id === item.id))

  return (
    <CartContext.Provider value={{ cart, setCart, checkIfItemIsInCart, addToCart, updateItemQuantity, removeItemFromCart, products }}>
      {children}
    </CartContext.Provider>
  );
};
