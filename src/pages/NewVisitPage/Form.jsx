import React from 'react'
import { IoChevronDown } from "react-icons/io5";

const Form = () => {
  return (
    <form className="w-full max-w-md">
        <div className="mb-6 relative">
          <label htmlFor="specialist" className="block text-md font-bold mb-2">
            Specjalista
          </label>
          <select 
            id="specialist" 
            className="block appearance-none w-full bg-white border border-gray-400 relative hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option disabled hidden>Wybierz specjalistę</option>
            <option value='2'>lek. Aneta Perlik</option>
            <option value='3'>lek. Mariusz Grodzki</option>
            <option value='4'>lek. Żaneta Wróg</option>
          </select>
          <div className='absolute top-10 right-2 text-xl'><IoChevronDown /> </div>
        </div>
        
        <div className="mb-6 relative">
          <label htmlFor="date" className="block text-md font-bold mb-2">
            Data
          </label>
          <select 
            id="date" 
            className="block appearance-none w-full bg-white border border-gray-400 py-3 hover:border-gray-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option disabled hidden>13.12.2023 13:00</option>
            <option value='1'>13.12.2023 14:00</option>
            <option value='2'>13.12.2023 15:00</option>
            <option value='3'>13.12.2023 17:00</option>
            <option value='4'>13.12.2023 18:00</option>
          </select>
          <div className='absolute top-10 right-2 text-xl'>
            <IoChevronDown /> 
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-[#303030] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700"
        >
          Zarejestruj się!
        </button>
      </form>
  )
}

export default Form