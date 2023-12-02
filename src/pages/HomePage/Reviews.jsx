import React from 'react'
import ReviewCard from '../../components/ReviewCard'

const Reviews = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='bg-[#F6F6F6] flex flex-col w-full max-w-[1200px] rounded-xl py-6'>
            <h2 className='font-semibold text-3xl text-center'>Opinie</h2>
            <div className='flex flex-col items-center gap-8 mt-4 mb-8 md:flex-row md:justify-between md:px-12'>
                <ReviewCard starsNumber={3} />
                <ReviewCard starsNumber={4} />
                <ReviewCard starsNumber={5} />
            </div>
        </div>
    </div>
  )
}

export default Reviews