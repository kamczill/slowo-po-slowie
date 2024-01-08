import React from 'react'
import CustomLink from './CustomLink'

const OrderCard = () => {
  return (
    <div className='flex flex-col gap-8 pb-10 border-b border-black md:flex-row md:justify-between md:px-14'>
        <div className='w-full flex flex-col gap-4'>
            <h3 className='font-semibold text-2xl'>Zamówienie nr: 343432</h3>
            <p>Data zamówienia: 10.01.2024r.</p>
            <p>Cena razem: 100zł</p>
        </div>
        <div className='w-full md:w-fit'>
            <CustomLink
              to='1'
              className={`w-full rounded-md bg-[#303030] p-2 py-3 text-center block text-white md:w-[150px]`}
            //   onClick={handleAddItemToCart}
            >
              Szczegóły
            </CustomLink>
        </div>
    </div>
  )
}

export default OrderCard