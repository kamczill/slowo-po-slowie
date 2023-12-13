import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const NavLinks = () => {
    const [isVisitOpen, setIsVisitOpen] = useState(false)

    const handleToggleVisits = () => setIsVisitOpen(!isVisitOpen)

    return(
        <>
            <NavLink to='/aktualnosci'>Aktualności</NavLink>
            <NavLink to='/kontakt'>Kontakt</NavLink>
            <NavLink to='/sklep'>Sklep</NavLink>
            <NavLink to='/o-nas'>O Nas</NavLink>
            <NavLink to='/wizyty/nowa' className='md:hidden'>Umów wizytę</NavLink>
            <NavLink to='/wizyty/zarezerwowane' className='md:hidden'>Moje wizyty</NavLink>
            <div className='hidden md:flex cursor-pointer items-center gap-2 relative' onClick={handleToggleVisits}>
                Wizyty 
                { isVisitOpen ? (
                    <>
                    <IoChevronDown />
                    <div className='flex flex-col absolute top-10 bg-white  z-10 w-[230px] p-6 shadow-2xl'>
                        <NavLink to='/wizyty/nowa' className='whitespace-nowrap border-b-2 border-black pb-2'>Umów wizytę</NavLink>
                        <NavLink to='/wizyty/zarezerwowane' className='whitespace-nowrap pt-2'>Moje wizyty</NavLink>
                    </div>
                    </>
                ): <IoChevronUp /> }
            </div>
        </>
    )
}

export default NavLinks