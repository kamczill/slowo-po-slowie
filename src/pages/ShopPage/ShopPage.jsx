import React from 'react'
import { Link, useParams } from 'react-router-dom'
import placeholder from './../../assets/blog-placeholder.png'

import ShopCard from '../../components/ShopCard';
import ShopNav from '../../components/ShopNav';

const ShopPage = () => {
    const { category } = useParams();
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center '>
        <div className='py-8 max-w-[1400px] px-6 w-full md:px-8 flex flex-col gap-8 md:flex-row lg:px-14 '>
        <ShopNav />
        
        <div className='bg-white w-full p-6'>
            <h2 className='font-semibold text-3xl text-left'>{category ? category : "Wszystkie produkty"}</h2>
            <main className='flex flex-col text-lg mt-12 gap-10'>
                <ShopCard 
                    img={placeholder}
                    title='Karty do gry “Słowo po słowie”'
                    excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
                    price="100.00"
                />
                <ShopCard 
                    img={placeholder}
                    title='Karty do gry “Słowo po słowie”'
                    excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
                    price="100.00"
                />
                <ShopCard 
                    img={placeholder}
                    title='Karty do gry “Słowo po słowie”'
                    excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
                    price="100.00"
                />
                <ShopCard 
                    img={placeholder}
                    title='Karty do gry “Słowo po słowie”'
                    excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
                    price="100.00"
                    lastItem
                />
               
            </main>
        </div>

        </div>
    </div>
    )
}

export default ShopPage