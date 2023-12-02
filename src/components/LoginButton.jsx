import React from 'react'
import { Link } from 'react-router-dom'
const LoginButton = () => {
    return (
        <Link to='/login'><button className='rounded-xl bg-[#303030] text-white py-2 px-6 text-lg md:py-[6px]'>Zaloguj się</button></Link>
    )
}

export default LoginButton