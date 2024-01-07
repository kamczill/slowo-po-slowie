import React, { useRef, useEffect } from "react";
import CustomLink from "./CustomLink";
import { useCart } from "../contexts/cartContext";
import CartProductFeature from "./CartProductFeature";

const CartFeature = ({ onClick, isOpen }) => {
  const { cart, products } = useCart()
  const productsInCart = products.filter(product => cart.find(cartProd => cartProd.id === product.id))
  const containerRef = useRef()

  let subtotalPrice = 0
  let totalPrice = 0

  const sumProductPrice = () => {
    productsInCart.forEach(cartProduct => {
      const quantity = cart.find(product => product.id === cartProduct.id).quantity
      totalPrice += cartProduct.price * parseInt(quantity)
    })
    subtotalPrice = totalPrice
  }
  
  sumProductPrice()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target) && isOpen) {
        onClick();
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);


  return (
    <div className="fixed right-0 top-20 z-10 flex min-h-[400px] w-screen max-w-[500px] flex-col justify-between gap-5 border bg-white p-6 shadow-2xl sm:right-20 sm:top-[90px] md:absolute md:right-6 md:top-[100px]" ref={containerRef}>
      <div>
        <h2 className="border-b-2 border-black pb-3 text-xl font-semibold">
          Mój koszyk
        </h2>
        <div>
            {productsInCart.length > 0 ? (
              productsInCart.map(product => 
              <CartProductFeature product={product} cart={cart} />
            )) : <p className="text-center mt-4">Koszyk jest pusty</p>
          }
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <p>
          Razem: <span>{totalPrice} zł</span>
        </p>
        <CustomLink
          to="/koszyk"
          className="w-full rounded-xl bg-[#303030] px-6 py-2 text-center text-lg text-white"
          onClick={onClick}
        >
          Przejdź do koszyka
        </CustomLink>
        <button
          onClick={onClick}
          className="w-full rounded-xl px-6 py-2 text-lg text-black"
        >
          lub kontynuuj zakupy
        </button>
      </div>
    </div>
  );
};

export default CartFeature;
