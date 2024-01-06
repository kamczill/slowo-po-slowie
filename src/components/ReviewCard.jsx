import React from "react";
import { IoStar } from "react-icons/io5";

const ReviewCard = ({ starsNumber, review, name }) => {
  return (
    <div className="min-h-[156px] w-full max-w-[325px] rounded-md bg-[#F6F6F6] p-4">
      <div className="flex gap-2 justify-center">
        {[...Array(starsNumber)].map((_, i) => (
          <IoStar key={i} className="text-2xl text-[#FFD978]" />
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-3">
        <p className="text-center text-md ">"{review}"</p>
        <span className="text-right mr-4 text-lg font-bold">{name}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
