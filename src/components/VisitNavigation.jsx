import React from 'react'
import { NavLink } from 'react-router-dom'

const VisitNavLink = ({to, children}) => {
    return(
        <NavLink 
        to={to}
        className={({ isActive }) =>
        `${isActive && 'underline'} text-lg underline-offset-2 font-semibold`}
    >
        {children}
    </NavLink>
    )
}

const VisitNavigation = () => {
  return (
    <div className='bg-white p-6 min-h-[300px] w-full md:max-w-[300px] md:min-h-[400px]'>
        <h2 className='text-2xl font-bold'>Moje wizyty</h2>
        <nav className='flex flex-col gap-3 mt-8'>
            <VisitNavLink to='/wizyty/zarezerwowane'>
                Zarezerwowane
            </VisitNavLink>
            <VisitNavLink to='/wizyty/historia'>
                Historia
            </VisitNavLink>
        </nav>
    </div>  
        )
}

export default VisitNavigation