import React from "react";
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1200px] flex-col rounded-xl bg-[#F6F6F6] py-6">
        <h2 className="text-center text-3xl font-semibold">Opinie</h2>
        <div className="mb-8 mt-4 flex flex-col items-center gap-8 md:flex-row md:justify-between md:px-12">
          <ReviewCard starsNumber={3} />
          <ReviewCard starsNumber={4} />
          <ReviewCard starsNumber={5} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
