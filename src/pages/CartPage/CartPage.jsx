import React from 'react'
import Cart from '../../components/Cart';
import Summary from './Summary';

const CartPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center md:min-h-[80vh]'>
        <div className=' py-8 max-w-[1400px] px-6  w-full md:px-8 flex flex-col items-center gap-4 lg:px-14'>
          <div className='w-full flex flex-col items-center gap-6 md:flex-row md:items-start justify-between'>
            <Cart />
            <Summary 
              subtotalPrice='200.00'
              totalPrice='400.00'
            />
          </div>
        </div>
    </div>
  )
}

export default CartPage