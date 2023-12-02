import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    return(
      <div className='flex flex-col items-center max-w-[560px] w-full md:min-h-[470px] p-6 bg-white lg:max-w-[760px]'>
        <h2 className='font-semibold text-xl text-center '>Zobacz koszyk</h2>
        <div className='border-t border-b border-black w-full py-6 px-2 mt-4'>
          <div className='flex flex-col gap-6'>
            <CartItem 
            title="Karty do gry “Słowo po słowie”"
            price="100.00"
            />
            <CartItem 
            title="Szkolenie indywidualne"
            price="499.00"
            />
            <CartItem 
            title="E-book Logopedia"
            price="59.00"
            />
          </div>
        </div>
      </div>
    )
  }
  
export default Cart