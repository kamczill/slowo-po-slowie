import React from 'react'
import Form from './Form'

const RegisterPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center md:min-h-[80vh]'>
        <div className='my-8 py-8 max-w-[1400px] px-6 bg-white w-full md:px-8 flex flex-col items-center gap-6 lg:px-14'>
          <h2 className='font-semibold text-3xl text-center'>Rejestracja</h2>
          <div className='w-full max-w-[800px] pb-6 flex flex-col items-center justify-center gap-6'>
              <Form />
          </div>
        </div>
    </div>
  )
}

export default RegisterPage