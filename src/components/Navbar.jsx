import React, { useState } from 'react'
import logo from './../assets/logo.png'
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import CartFeature from './CartFeature';
import LoginButton from './LoginButton';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)
    const [isOpenCart, setIsOpenCart] = useState(false)

    const handleToggleMobileNav = () => {
        if(isOpenCart) setIsOpenCart(false)
        setIsOpenMobileNav(!isOpenMobileNav)
    }

    const handleToggleCart = () => {
        if(isOpenMobileNav) setIsOpenMobileNav(false)
        setIsOpenCart(!isOpenCart)
    }

  return (
    <div className='flex justify-center w-full'>
        <div className='flex justify-between items-center px-6 py-6 relative w-full max-w-[1400px] md:p-8'>
            <div className='w-1/3 max-w-[170px]  lg:max-w-[192px]'>
                <Link to='/'><img src={logo} className='w-full'/></Link>
            </div>
            <div className='hidden md:block'>
                <nav className='flex items-center gap-4 text-xl'>
                    <NavLinks />
                </nav>
            </div>
            <div className='hidden md:block'>
                <LoginButton />
            </div>
            <div className='relative flex items-center gap-6'>
                <div className='relative' onClick={handleToggleCart}>
                    <IoCartOutline className='text-4xl'/>
                    <div className='absolute top-[-4px] right-[-8px] rounded-full bg-red-500 w-[22px] h-[22px] flex justify-center items-center text-white'>
                        1
                    </div>
                </div>
                <div className='relative md:hidden' onClick={handleToggleMobileNav}>
                    { isOpenMobileNav ?
                        <IoClose className='text-4xl'/> :
                        <IoMenu className='text-4xl'/> 
                    }  
                </div>
            </div>

            {/* mobile menu */}
            <div className={`${isOpenMobileNav ? '': 'hidden'} absolute z-10 w-screen left-0 bottom-[-370px] bg-white px-6 py-6 md:hidden`}>
                <nav className='flex flex-col text-2xl gap-6 items-center'>
                    <NavLinks />
                    <LoginButton />
                </nav>
            </div>

            {/* cart */}
            {isOpenCart && <CartFeature onClick={handleToggleCart} />}
        </div>
    </div>
  )
}

export default Navbar