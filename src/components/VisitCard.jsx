import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

const VisitCard = ({ date, specialist, place, lastItem }) => {
  return (
    <article
      className={`flex w-full flex-col items-center gap-4 pb-10 md:flex-row lg:gap-8 ${
        !lastItem && "border-b-2 border-black"
      }`}
    >
      <div className="h-[200px] w-[200px] bg-[#6D4646]"></div>
      <div className="flex flex-col gap-2 text-lg">
        <h3 className="text-xl font-bold">{date}</h3>
        <p>{specialist}</p>
        <div className="flex gap-2">
          <IoLocationOutline className="text-2xl" />
          {place}
        </div>
        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row">
          <CustomLink
            to="/wizyty/historia/1"
            className="flex items-center justify-center rounded-lg bg-[#303030] px-4 py-2 text-white lg:w-[148px] lg:px-0"
          >
            Szczegóły
          </CustomLink>
          <button className="rounded-lg bg-[#303030] px-4 py-2 text-white lg:w-[148px] lg:px-0">
            Przełóż wizytę
          </button>
          <button className="rounded-lg bg-[#303030] px-4 py-2 text-white lg:w-[148px] lg:px-0">
            Odwołaj wizytę
          </button>
        </div>
      </div>
    </article>
  );
};

export default VisitCard;
