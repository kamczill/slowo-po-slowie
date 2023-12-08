import React from 'react'
import headerImg from './../assets/header.png'
import { IoArrowForward } from "react-icons/io5";
import CustomLink from './CustomLink'

const Header = () => {
  return (
    <header>
        <div className='relative'>
            <img src={headerImg} className='w-full h-[50vh] object-cover object-left'/>
            <div className='right-0 absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center md:left-[250px] md:bottom-0'>
                <h2 className='text-white font-semibold text-3xl max-w-[240px] text-center lg:text-4xl'>Z nami</h2>
                <h2 className='text-white font-semibold text-3xl max-w-[240px] text-center lg:text-4xl'>do poprawnej mowy!</h2>

                <CustomLink className='flex items-center gap-1 text-white text-xl mt-4' to='sklep/szkolenia'>
                    Nasze szkolenia 
                    <IoArrowForward />
                </CustomLink>
            </div>
        </div>
    </header>
  )
}

export default Header