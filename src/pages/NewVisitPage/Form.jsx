import React from "react";
import { IoChevronDown } from "react-icons/io5";

const Form = () => {
  return (
    <form className="w-full max-w-md">
      <div className="relative mb-6">
        <label htmlFor="specialist" className="text-md mb-2 block font-bold">
          Specjalista
        </label>
        <select
          id="specialist"
          className="focus:shadow-outline relative block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-3 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
        >
          <option disabled hidden>
            Wybierz specjalistę
          </option>
          <option value="2">lek. Aneta Perlik</option>
          <option value="3">lek. Mariusz Grodzki</option>
          <option value="4">lek. Żaneta Wróg</option>
        </select>
        <div className="absolute right-2 top-10 text-xl">
          <IoChevronDown />{" "}
        </div>
      </div>

      <div className="relative mb-6">
        <label htmlFor="date" className="text-md mb-2 block font-bold">
          Data
        </label>
        <select
          id="date"
          className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-3 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
        >
          <option disabled hidden>
            13.12.2023 13:00
          </option>
          <option value="1">13.12.2023 14:00</option>
          <option value="2">13.12.2023 15:00</option>
          <option value="3">13.12.2023 17:00</option>
          <option value="4">13.12.2023 18:00</option>
        </select>
        <div className="absolute right-2 top-10 text-xl">
          <IoChevronDown />
        </div>
      </div>

      <button
        // type="submit"
        className="focus:shadow-outline w-full rounded bg-[#303030] px-4 py-3 font-bold text-white hover:bg-gray-700 focus:outline-none"
      >
        Zarejestruj się!
      </button>
    </form>
  );
};

export default Form;
