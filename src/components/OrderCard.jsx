import React from 'react'
import CustomLink from './CustomLink'
import {formatDate} from '../utils/formatDate'
const OrderCard = ({orderId, date, price}) => {
  return (
    <div className='flex flex-col gap-8 pb-10 border-b border-black md:flex-row md:justify-between md:px-14'>
        <div className='w-full flex flex-col gap-4'>
            <h3 className='font-semibold text-2xl'>Zamówienie nr: {orderId}</h3>
            <p>Data zamówienia: {formatDate(date)}</p>
            <p>Cena razem: {price}zł</p>
        </div>
        {/* <div className='w-full md:w-fit'>
            <CustomLink
              to='1'
              className={`w-full rounded-md bg-[#303030] p-2 py-3 text-center block text-white md:w-[150px]`}
            //   onClick={handleAddItemToCart}
            >
              Szczegóły
            </CustomLink>
        </div> */}
    </div>
  )
}

export default OrderCard