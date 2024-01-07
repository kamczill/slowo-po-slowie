import React from 'react'
import CategoryBanner from '../../components/CategoryBanner'
import graImg from '../../assets/gra-logopedyczna.png'
import ebookImg from '../../assets/e-book-mow.png'
const ProductBanners = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="flex w-full max-w-[1200px] flex-col gap-12 rounded-xl bg-[#F6F6F6] py-6 lg:flex-row lg:justify-between">
        <CategoryBanner img={ebookImg} alt='Gra Logopedyczna Dla Dzieci' to='sklep/karty' title='Karty do gry'/>
        <CategoryBanner img={graImg} alt='Gra Logopedyczna Dla Dzieci' to='sklep/e-booki' title='E-booki' />
    </div>
  </div>  )
}

export default ProductBanners