import React from 'react'
import Form from './Form'
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center md:min-h-[80vh]'>
        <div className=' py-8 max-w-[1400px] px-6  w-full md:px-8 flex flex-col items-center gap-4 lg:px-14'>
        <div className='w-full flex flex-col items-center gap-6 md:flex-row md:items-start justify-between'>
            <div className='bg-white p-6 flex flex-col gap-6 w-full'>
                <h2 className='font-semibold text-xl text-left border-b border-black pb-4'>Napisz do nas!</h2>
                <Form />
            </div>
            <div className='w-full overflow-hidden flex flex-col gap-6  md:max-w-[350px]'>
                <iframe className='' width='900' height='300'
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81987.39005695471!2d19.922473239358613!3d50.04684672014896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1701533530939!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='flex flex-col bg-white p-4 pb-7'>
                    <h2 className='font-semibold text-xl text-left '>Kontakt</h2>
                    <div className='text-lg leading-4 flex flex-col gap-6 mt-6 px-2 w-full'>
                        <div className='inline-flex justify-start gap-4 items-start w-full'>
                            <IoLocationOutline className='text-2xl' />
                            <div className='flex flex-col gap-2'>
                                <p>00-000 Miejscowość</p>
                                <p>l. Ulica 11</p>
                            </div>
                        </div>
                        <div className='inline-flex justify-start items-center gap-4 w-full'>
                            <BsTelephone className='text-2xl' />
                            <div className='flex flex-col gap-2'>
                                <p>000 000 000</p>
                            </div>
                        </div>
                        <div className='inline-flex justify-start gap-4 items-center w-full'>
                            <IoMailOutline className='text-2xl' />
                            <div className='flex flex-col gap-2'>
                                <p>adres.doktorka@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>  
 )
}

export default ContactPage