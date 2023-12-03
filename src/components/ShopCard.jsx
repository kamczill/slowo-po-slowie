import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ShopCard = ({img, title, excerpt, price, id=1, lastItem}) => {
    return(
        <div className={`border-b pb-12 border-black flex flex-col md:flex-row gap-12 ${lastItem && 'border-none'} shrink-0 grow-1`}>
            <div className='w-full max-h-[300px] max-w-[200px] shrink-0 mx-auto'>
                <img src={img} className='w-full h-full'/>
            </div>
            <div className='flex flex-col gap-6 mt-4'>
                <h3 className='font-semibold text-xl text-center md:text-left'>
                    <Link to={`/sklep/produkty/${id}`}>{title}</Link>
                </h3>
                <p className='text-justify'>{excerpt}</p>
                <div className='flex gap-6 text-xl'>
                    <span>{price} zł</span>
                    <button className='px-4'>
                        <IoBagOutline className='text-2xl' />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShopCard