import React from 'react'
import CustomLink from './CustomLink'

const CategoryBanner = ({title, img, alt, to}) => {
  return (
    <div className='bg-white w-full px-12 py-12 flex flex-col gap-6 justify-center items-center'>
        <div className='w-content'>
            <img src={img} alt={alt} />
        </div>
        <h2 className='text-black text-2xl font-bold text-center'>{title}</h2>
        <CustomLink
        className="inline-flex items-center justify-center w-full py-4 bg-[#303030] text-white text-xl rounded-md lg:max-w-[240px]"
        to={to}
      >
        Sprawdź teraz!
      </CustomLink>    
      </div>
  )
}

export default CategoryBanner