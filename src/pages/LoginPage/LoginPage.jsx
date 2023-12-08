import React from 'react'
import Form from './Form'
import CustomLink from '../../components/CustomLink'

const LoginPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center md:min-h-[80vh]'>
        <div className='my-8 py-8 max-w-[1400px] px-6 bg-white w-full md:px-8 flex flex-col items-center gap-6 lg:px-14'>
        <h2 className='font-semibold text-3xl text-center'>Logowanie</h2>
        <div className='w-full max-w-[800px] pb-6 border-b-2 border-black flex flex-col items-center justify-center gap-6'>
            <Form />
            <CustomLink to='/przypomnienie-hasla' className='underline underline-offset-2'>Przypomnij hasło</CustomLink>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-6'>
            <h4>Nie masz konta?</h4>
            <CustomLink to='/rejestracja' className='max-w-[350px] w-full'>
              <button className='w-full rounded-md text-center text-white  bg-[#303030] p-2'>
                  Zarejestruj się
              </button>
            </CustomLink>
        </div>
        </div>
    </div>
  )
}


export default LoginPage