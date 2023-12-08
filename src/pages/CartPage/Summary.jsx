import React from 'react'
import CustomLink from '../../components/CustomLink'

const Summary = ({subtotalPrice, totalPrice}) => {
    return(
      <div className='flex flex-col justify-between gap-4 w-full max-w-[560px] bg-white p-6 h-full md:min-h-[470px] md:max-w-[370px]'>
        <div>
          <h2 className='font-semibold text-xl text-center'>Podsumowanie</h2>
          <div className='flex flex-col gap-4 text-lg mt-8'>
            <div className='inline-flex justify-between'>
              <p>Suma częściowa</p>
              <span>{subtotalPrice} zł</span>
            </div>
            <div className='inline-flex justify-between'>
              <p>Razem</p>
              <span>{totalPrice} zł</span>
            </div>
          </div>
          <div className='inline-flex mt-8 w-full'>
            <input className='w-full border border-[#303030] px-2' placeholder='Kod rabatowy'/>
            <button className='bg-[#303030] px-4 py-1 text-white'>Dodaj</button>
          </div>
        </div>
        <button type="submit" className='w-full mt-12 rounded-md text-center text-white  bg-[#303030] p-3 max-w-[350px]'>
          <CustomLink to=''>Przejdź do kasy</CustomLink>
        </button>
      </div>
    )
}

export default Summary