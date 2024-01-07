import React, { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "../contexts/cartContext";

const Cart = ({ }) => {
  const { products, cart, updateItemQuantity, removeItemFromCart } = useCart()
  

  return (
    <div className="flex w-full max-w-[560px] flex-col items-center bg-white p-6 md:min-h-[470px] lg:max-w-[760px]">
      <h2 className="text-center text-xl font-semibold ">Zobacz koszyk</h2>
      <div className="mt-4 w-full border-b border-t border-black px-2 py-6">
        <div className="flex flex-col gap-6">

          { cart.length > 0 ? (
            cart.map(cartProduct => (
              <CartItem 
                key={cartProduct.id} 
                cartProduct={cartProduct} 
                products={products} 
                cart={cart} 
                updateItemQuantity={updateItemQuantity}
                removeItemFromCart={removeItemFromCart}
              />
            ))
          ): 'Koszyk jest pusty'}
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
