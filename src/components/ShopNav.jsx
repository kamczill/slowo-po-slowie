import React from 'react'
import CustomLink from './CustomLink'
const ShopNav = () => {
    return(
        <div className='md:max-w-[300px] bg-white w-full p-6 md:h-[400px]'>
            <CustomLink to='/sklep'><h2 className='font-semibold text-3xl text-left'>Sklep</h2></CustomLink>
            <nav className='flex flex-col text-lg mt-6 gap-4'>
                <CustomLink to='/sklep/karty'>Karty do gry</CustomLink>
                <CustomLink to='/sklep/szkolenia'>Szkolenia</CustomLink>
                <CustomLink to='/sklep/e-booki'>E-booki</CustomLink>
            </nav>
        </div>
    )
}

export default ShopNav