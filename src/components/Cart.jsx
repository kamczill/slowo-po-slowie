import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ products, cart }) => {
  return (
    <div className="flex w-full max-w-[560px] flex-col items-center bg-white p-6 md:min-h-[470px] lg:max-w-[760px]">
      <h2 className="text-center text-xl font-semibold ">Zobacz koszyk</h2>
      <div className="mt-4 w-full border-b border-t border-black px-2 py-6">
        <div className="flex flex-col gap-6">

          { products.length > 0 ? (
            products.map(product => (
              <CartItem key={product.id} product={product} cart={cart}
              />
            ))
          ): 'Koszyk jest pusty'}
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
