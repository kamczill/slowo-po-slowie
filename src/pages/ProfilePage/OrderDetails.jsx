import React from 'react'
import graImg from '../../assets/products/gra-slowo-po-slowie.png'
const OrderDetails = () => {
  return (
    <div className="w-full bg-white p-6 md:px-14">
      <h2 className="text-left text-3xl font-semibold md:px-14">
        Szczegóły zamówienia: 229312312
      </h2>
      <div className='flex flex-col gap-6 mt-8 md:flex-row'>
        <div className='w-full max-w-[260px] md:max-w-[160px] '>
          <img src={graImg} alt='gra'/>
        </div>
        <div className='flex flex-col gap-6'>
          <h3 className='font-bold text-xl'>Karty do gry “Słowo po słowie”</h3>
          <p className='text-md'>Zapraszamy do odkrycia 'Słowo po Słowie' – rewolucyjnych kart logopedycznych, wchodzących w skład serii 'SkojaRzeń do Mówienia'. Autorska pomoc logopedyczna, inspirowana koncepcją Van Rippera, skł...</p>
          <div className='flex gap-14 text-lg'> 
            <p>Cena: 100zł</p>
            <p>Ilość: 1</p>
          </div>
        </div>
      </div>
      
      <div className='mt-6 flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-14'>
        <div className='text-lg flex flex-col gap-6'>
          <p>Data zamówienia: 10.01.2024 r. </p>
          <p>Razem: 100 zł</p>
          <p>Płatność: Przelewy24 </p>
          <p>Kurier: DPD </p>
        </div>
        <div className='text-lg flex flex-col gap-6'>
          <p>Adres dostawy: </p>
          <p>Dominika Galarczyk, </p>
          <p>Ul.Kęcka 9A, </p>
          <p>43-332 Pisarzowice PL </p>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails