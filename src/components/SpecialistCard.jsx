import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const SpecialistCard = ({avatar, name, surname, city}) => {
    return(
      <div className='flex flex-col gap-3 max-w-[100px]'>
          <div>
            <img src={avatar} alt={`${name} ${surname}`} 
              className='max-w-[100px] '
            />
          </div>
          <div className='font-semibold text-lg flex flex-col justify-center items-center'>
            <h3>{name}</h3>
            <h3>{surname}</h3>
          </div>
          <div className='flex gap-2 text-[#777777] justify-center items-center'>
            <IoLocationOutline />
            <p>{city}</p>
          </div>
      </div>
    )
}

export default SpecialistCard