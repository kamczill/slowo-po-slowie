import React from 'react'
import { IoStar } from "react-icons/io5";

const ReviewCard = ({starsNumber}) => {
  return (
    <div className='min-h-[156px] bg-white w-full max-w-[305px] rounded-2xl p-4'>
        <div className='flex gap-2'>
            {[...Array(starsNumber)].map((_, i) => (
                <IoStar className='text-[#F9C2A5] text-2xl' />
            ))}
        </div>
    </div>
  )
}

export default ReviewCard