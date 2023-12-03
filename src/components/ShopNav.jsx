import React from 'react'
import { Link } from 'react-router-dom'

const ShopNav = () => {
    return(
        <div className='md:max-w-[300px] bg-white w-full p-6 md:h-[400px]'>
            <Link to='/sklep'><h2 className='font-semibold text-3xl text-left'>Sklep</h2></Link>
            <nav className='flex flex-col text-lg mt-6 gap-4'>
                <Link to='/sklep/karty'>Karty do gry</Link>
                <Link to='/sklep/szkolenia'>Szkolenia</Link>
                <Link to='/sklep/e-booki'>E-booki</Link>
            </nav>
        </div>
    )
}

export default ShopNav