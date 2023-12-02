import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri";

const CartItem = ({title, price}) => {
    return (
      <div className='flex justify-between items-center text-md lg:text-lg'>
        <h4 className='w-full max-w-[35vw] md:max-w-full'>{title}</h4>
        <div className='flex gap-4 items-center w-full justify-end lg:gap-10'>
          <RiDeleteBin7Line className='text-xl'/>
          <select name="count" id="count" className='w-10'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p className='whitespace-nowrap'>{price} zł</p>
        </div>
      </div>
    )
  }

export default CartItem