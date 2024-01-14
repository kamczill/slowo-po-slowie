import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const ProfileNav = () => {
    const location = useLocation();
    const isProfilPath = location.pathname === '/profil'

  return (
    <div className="w-full bg-white p-6 md:h-[400px] md:max-w-[300px]">
        <NavLink to="">
        <h2 className="text-left text-3xl font-semibold">Moje konto</h2>
        </NavLink>
        <nav className="mt-6 flex flex-col gap-4 text-lg">
            <NavLink to='informacje'
                className={({isActive}) => `${isActive || isProfilPath ? 'font-bold': ''}`}
            >
                Informacje o koncie
            </NavLink>
            <NavLink 
                className={({isActive}) => `${isActive ? 'font-bold': ''}`}
                to='zamowienia'
            >
                Moje zamówienia
            </NavLink>
        </nav>
    </div>
    )
}

export default ProfileNav