import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return(
        <>
            <NavLink to='/aktualnosci'>Aktualności</NavLink>
            <NavLink>Kontakt</NavLink>
            <NavLink>Sklep</NavLink>
            <NavLink to='/o-nas'>O Nas</NavLink>
            <NavLink>Wizyty</NavLink>
        </>
    )
}

export default NavLinks