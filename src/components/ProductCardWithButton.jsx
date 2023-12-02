import React from 'react'

const ProductCardWithButton = ({productImg, title, url}) => {
    return(
        <article className='flex flex-col gap-4'>
            <div className='max-w-[270px]'>
                <img src={productImg} className='w-full'/>
            </div>
            <h2 className='font-semibold text-3xl text-center'>{title}</h2>
            <button className='text-center bg-[#8DBBD2] hover:bg-[#a9cddf] text-white px-3 py-2 rounded-xl'><a href={url}>dowiedz się więcej</a></button>
        </article>
    )
}

export default ProductCardWithButton