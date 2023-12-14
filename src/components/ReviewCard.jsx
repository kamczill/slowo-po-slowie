import React from "react";
import { IoStar } from "react-icons/io5";

const ReviewCard = ({ starsNumber }) => {
  return (
    <div className="min-h-[156px] w-full max-w-[305px] rounded-2xl bg-white p-4">
      <div className="flex gap-2">
        {[...Array(starsNumber)].map((_, i) => (
          <IoStar key={i} className="text-2xl text-[#F9C2A5]" />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
