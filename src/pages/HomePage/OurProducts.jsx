import React from 'react'
import cards from './../../assets/cards.png'
import course from './../../assets/course.png'
import ebooks from './../../assets/e-books.png'
import ProductCardWithButton from '../../components/ProductCardWithButton'

const OurProducts = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='bg-[#F6F6F6] flex flex-col w-full max-w-[1200px] rounded-xl py-6'>
            <h2 className='font-semibold text-3xl text-center'>Zobacz co u nas znajdziesz</h2>
            <div className='flex flex-col items-center gap-12 mt-8 mb-8 md:flex-row md:justify-between md:px-12'>
                <ProductCardWithButton
                    productImg={cards}
                    title='Karty do nauki'
                    url='sklep/karty'
                />
                <ProductCardWithButton
                    productImg={course}
                    title='Szkolenia'
                    url='sklep/szkolenia'
                />
                <ProductCardWithButton
                    productImg={ebooks}
                    title='E-booki'
                    url='sklep/e-booki'
                />
            </div>
        </div>
    </div>
  )
}

export default OurProducts