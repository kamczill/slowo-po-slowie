import React from 'react'
import CustomLink from './CustomLink';

const ProductCardWithButton = ({productImg, title, url}) => {

    const handleScrollToTop = () => {
        window.scroll(0, 0);
    }

    return(
        <article className='flex flex-col gap-4'>
            <div className='max-w-[270px]'>
                <img src={productImg} className='w-full'/>
            </div>
            <h2 className='font-semibold text-3xl text-center'>{title}</h2>
            <CustomLink to={url} onClick={handleScrollToTop} className='text-center bg-[#8DBBD2] hover:bg-[#a9cddf] text-white px-3 py-2 rounded-xl'>
                dowiedz się więcej
            </CustomLink>
        </article>
    )
}

export default ProductCardWithButton