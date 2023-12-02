import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return(
        <>
            <NavLink to='/aktualnosci'>Aktualności</NavLink>
            <NavLink to='/kontakt'>Kontakt</NavLink>
            <NavLink to='/sklep'>Sklep</NavLink>
            <NavLink to='/o-nas'>O Nas</NavLink>
            <NavLink>Wizyty</NavLink>
        </>
    )
}

export default NavLinks