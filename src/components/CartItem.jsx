import React, { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const CartItem = ({ cartProduct, cart, products, updateItemQuantity, removeItemFromCart }) => {
  const currentProduct = products.find(product => product.id === cartProduct.id)
  const [quantity, setQuantity] = useState(cartProduct.quantity)
  const price = quantity * currentProduct?.price

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity)
    updateItemQuantity(currentProduct, newQuantity)
  };
  
  const handleRemoveItemFromCart = () => {
    removeItemFromCart(currentProduct)
  }

  return (
    <div className="text-md flex items-center justify-between lg:text-lg">
      <h4 className="w-full max-w-[35vw] md:max-w-full">{currentProduct?.title}</h4>
      <div className="flex w-full items-center justify-end gap-4 lg:gap-10">
        <RiDeleteBin7Line className="text-xl cursor-pointer" onClick={handleRemoveItemFromCart}/>
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
