import React from 'react'
import { Link } from 'react-router-dom'

const CartFeature = ({onClick}) => {
  return (
    <div className='fixed z-10 top-20 bg-white border shadow-2xl w-screen right-0 p-6 flex flex-col justify-between min-h-[400px] max-w-[500px] gap-5 sm:right-20 sm:top-[90px] md:absolute md:right-6 md:top-[100px]'>
        <div>
        <h2 className='font-semibold text-xl border-b-2 border-black pb-3'>Mój koszyk</h2>
            <div>
                <div className='flex justify-between py-3 border-b-2 border-black'>
                    <h3>Karty do gry "Słowo po Słowie"</h3>
                    <span>50zł</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
            <p>Razem: <span>100,00 zł</span></p>
            <Link to='/koszyk'className='rounded-xl bg-[#303030] text-white py-2 px-6 w-full text-lg text-center' onClick={onClick}>Przejdź do koszyka</Link>
            <button onClick={onClick}  className='rounded-xl text-black py-2 px-6 text-lg w-full'>lub kontynuuj zakupy</button>
        </div>
    </div>
  )
}

export default CartFeature