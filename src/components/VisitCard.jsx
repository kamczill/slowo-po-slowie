import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const VisitCard = ({date, specialist, place, lastItem }) => {
  return (
    <article className={`flex flex-col gap-4 items-center w-full md:flex-row lg:gap-8 pb-10 ${!lastItem && 'border-b-2 border-black'}`}>
        <div className='bg-[#6D4646] w-[200px] h-[200px]'></div>
        <div className='flex flex-col gap-2 text-lg'>
            <h3 className='font-bold text-xl'>{date}</h3>
            <p>{specialist}</p>
            <div className='flex gap-2'>
                <IoLocationOutline className='text-2xl' />
                {place}
            </div>
            <div className='flex flex-col gap-4 mt-4 w-full md:flex-row'>
                <CustomLink to='/wizyty/historia/1' className='bg-[#303030] flex items-center justify-center text-white py-2 px-4 rounded-lg lg:px-0 lg:w-[148px]'>Szczegóły</CustomLink>
                <button className='bg-[#303030] text-white py-2 px-4 rounded-lg lg:px-0 lg:w-[148px]'>Przełóż wizytę</button>
                <button className='bg-[#303030] text-white py-2 px-4 rounded-lg lg:px-0 lg:w-[148px]'>Odwołaj wizytę</button>
            </div>
        </div>
    </article>
   )
}

export default VisitCard