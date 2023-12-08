import React from 'react'
import CustomLink from './CustomLink'

const LoginButton = () => {
    return (
        <CustomLink to='/login'><button className='rounded-xl bg-[#303030] text-white py-2 px-6 text-lg md:py-[6px]'>Zaloguj się</button></CustomLink>
    )
}

export default LoginButton