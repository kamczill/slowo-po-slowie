import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const SpecialistCard = ({ avatar, name, surname, city }) => {
  return (
    <div className="flex max-w-[100px] flex-col gap-3">
      <div>
        <img
          src={avatar}
          alt={`${name} ${surname}`}
          className="max-w-[100px] "
        />
      </div>
      <div className="flex flex-col items-center justify-center text-lg font-semibold">
        <h3>{name}</h3>
        <h3>{surname}</h3>
      </div>
      <div className="flex items-center justify-center gap-2 text-[#777777]">
        <IoLocationOutline />
        <p>{city}</p>
      </div>
    </div>
  );
};

export default SpecialistCard;
