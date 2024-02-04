import React from "react";
import customAxios from '../../axios/axios'
import { useAuth } from './../../contexts/authContext'
import { toast } from "react-toastify";
import { useCart } from "../../contexts/cartContext";

const Summary = ({productsInCart, cart}) => {
  const { user } = useAuth()
  const { setCart, cart: cartLS } = useCart()
  const buttonDisabled = JSON.parse(localStorage.getItem('cart')).length == 0 
  let subtotalPrice = 0
  let totalPrice = 0

  const sumProductPrice = () => {
    productsInCart.forEach(cartProduct => {
      const quantity = cart.find(product => product.id === cartProduct.id).quantity
      totalPrice += cartProduct.price * parseInt(quantity)
    })
    subtotalPrice = totalPrice
  }
  const submitOrder = async () => {
    const cartLength = JSON.parse(localStorage.getItem('cart')).length;
    if (cartLength > 0 && user) {
      const addToCartPromises = cartLS.map(item => {
        return customAxios.post(`add-to-cart/${user.id}?product_id=${item.id}&quantity=${item.quantity}`);
      });
  
      try {
        const addToCartResults = await Promise.all(addToCartPromises);
        console.log("All items added to cart successfully:", addToCartResults);

        const finalQueryResult = await customAxios.post(`place-order/${user.id}`, {
          "delivery_method": "string",
          "address": "string",
          "city": "string",
          "zip_code": "string",
          "recipient_name": "string"
        });
        console.log("Final query succeeded:", finalQueryResult);
        toast.success('Twoje zamówienie zostało złożone!', {
          position: "bottom-center",
        });
        localStorage.setItem('cart', '[]')
        setCart([])
        
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error(`${error}`, {
          position: "bottom-center",
          });
      }
    }
  }

  sumProductPrice()

  return (
    <div className="flex h-full w-full max-w-[560px] flex-col justify-between gap-4 bg-white p-6 md:min-h-[470px] md:max-w-[370px]">
      <div>
        <h2 className="text-center text-xl font-semibold">Podsumowanie</h2>
        <div className="mt-8 flex flex-col gap-4 text-lg">
          <div className="inline-flex justify-between">
            <p>Suma częściowa</p>
            <span>{subtotalPrice} zł</span>
          </div>
          <div className="inline-flex justify-between">
            <p>Razem</p>
            <span>{totalPrice} zł</span>
          </div>
        </div>
        <div className="mt-8 inline-flex w-full">
          <input
            className="w-full border border-[#303030] px-2"
            placeholder="Kod rabatowy"
          />
          <button className="bg-[#303030] px-4 py-1 text-white">Dodaj</button>
        </div>
      </div>
      <button
        onClick={submitOrder}
        disabled={buttonDisabled}
        className="mt-12 w-full max-w-[350px] rounded-md bg-[#303030]  p-3 text-center text-white"
      >
        Złóż zamówienie
      </button>
    </div>
  );
};

export default Summary;
