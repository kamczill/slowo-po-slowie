import React, { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const CartItem = ({ product, cart }) => {
  const [quantity, setQuantinty] = useState(cart.find(item => item.id === product.id).quantity);
  let price = product?.price * quantity;

  const updateItemQuantity = (itemId, quantity) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setQuantinty(quantity)
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);


    updateItemQuantity(product.id, newQuantity);
  };

  const removeItemFromCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter(item => item.id !== product?.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  return (
    <div className="text-md flex items-center justify-between lg:text-lg">
      <h4 className="w-full max-w-[35vw] md:max-w-full">{product?.title}</h4>
      <div className="flex w-full items-center justify-end gap-4 lg:gap-10">
        <RiDeleteBin7Line className="text-xl cursor-pointer" onClick={removeItemFromCart} />
        <select 
        name="count" 
        id="count" 
        className="w-10"
        value={quantity}
        onChange={handleQuantityChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className="whitespace-nowrap">{price} zł</p>
      </div>
    </div>
  );
};

export default CartItem;
