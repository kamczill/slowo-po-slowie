import React from 'react'
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

import logo from './../assets/logo-white.png'
import CustomLink from './CustomLink';

const Footer = () => {
  return (
    <footer className='bg-[#303030] text-white px-6 flex justify-center py-8'>
      <div className='max-w-[1400px] w-full flex flex-wrap gap-12 justify-center md:flex-row md:justify-around'>
        {/* Logo and contact */}
        <section className='flex flex-col gap-4 max-w-[300px] w-full md:max-w-fit'>
          <div className='w-[80%] max-w-[200px]'>
            <img src={logo} />
          </div>
          <div className='inline-flex justify-start gap-4 items-start w-full '>
              <IoLocationOutline className='text-2xl' />
              <div className='flex flex-col gap-2'>
                  <p>00-000 Miejscowość</p>
                  <p>l. Ulica 11</p>
              </div>
          </div>
          <div className='inline-flex justify-start items-center gap-4 w-full'>
              <BsTelephone className='text-2xl' />
              <div className='flex flex-col gap-2'>
                  <p>000 000 000</p>
              </div>
          </div>
          <div className='inline-flex justify-start gap-4 items-center w-full'>
              <IoMailOutline className='text-2xl' />
              <div className='flex flex-col gap-2'>
                  <p>adres.doktorka@gmail.com</p>
              </div>
          </div>
        </section>

        {/* Account  */}
        <section className='flex flex-col gap-4 max-w-[300px] w-full md:max-w-fit'>
          <h3 className='font-bold'>KONTO</h3>
          <CustomLink to='/rejestracja'>Rejestracja</CustomLink>
          <CustomLink to='/login'>Logowanie</CustomLink>
          <CustomLink>Moje zamówienia</CustomLink>
        </section>
        
        {/* Shop */}
        <section className='flex flex-col gap-4 max-w-[300px] w-full md:max-w-fit'>
          <h3 className='font-bold'>SKLEP</h3>
          <CustomLink to='/o-nas'>O nas</CustomLink>
          <CustomLink to='/sklep'>Produkty</CustomLink>
          <CustomLink>Płatności</CustomLink>
        </section>
        
        {/* Help */}
        <section className='flex flex-col gap-4 max-w-[300px] w-full md:max-w-fit'>
          <h3 className='font-bold'>POMOC</h3>
          <CustomLink to='regulamin'>Regulamin</CustomLink>
          <CustomLink to='/polityka-prywatnosci'>Polityka prywatności</CustomLink>
          <CustomLink to='/polityka-plikow-cookie'>Polityka plików cookie</CustomLink>
        </section>
      </div>
    </footer>
  )
}

export default Footer