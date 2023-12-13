import React from 'react'
import Form from './Form';

const NewVisitPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center '>
      <div className='my-8 py-8 max-w-[1400px] px-6 w-full md:px-8 flex flex-col gap-8 md:flex-row md:items-start lg:px-14 bg-white'>
        <div className="flex flex-col items-center p-4 w-full ">
          <h2 className="text-2xl font-bold mb-4">Umów wizytę</h2>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default NewVisitPage