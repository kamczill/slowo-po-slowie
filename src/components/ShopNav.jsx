import React from 'react'
import { Link } from 'react-router-dom'

const ShopNav = () => {
    return(
        <div className='md:max-w-[300px] bg-white w-full p-6 md:h-[400px]'>
            <h2 className='font-semibold text-3xl text-left'>Sklep</h2>
            <nav className='flex flex-col text-lg mt-6 gap-4'>
                <Link>Karty do gry</Link>
                <Link>Szkolenia</Link>
                <Link>E-booki</Link>
            </nav>
        </div>
    )
}

export default ShopNav