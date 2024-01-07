import React, { useState } from "react";
import Cart from "../../components/Cart";
import Summary from "./Summary";
import { useCart } from "../../contexts/cartContext";

const CartPage = () => {
  const { cart, products } = useCart()
  const productsInCart = products.filter(product => cart.find(cartProd => cartProd.id === product.id))
  
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] md:min-h-[80vh]">
      <div className=" flex w-full max-w-[1400px]  flex-col items-center gap-4 px-6 py-8 md:px-8 lg:px-14">
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <Cart products={productsInCart} cart={cart}/>
          <Summary productsInCart={productsInCart} cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
