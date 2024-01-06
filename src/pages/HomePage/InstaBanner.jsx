import React from 'react'
import CustomLink from '../../components/CustomLink'
import logo from '../../assets/logo-circle.png'
import img1 from '../../assets/insta-photo1.png'
import img2 from '../../assets/insta-photo2.png'
import img3 from '../../assets/insta-photo3.png'

const InstaBanner = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[1200px] flex-col rounded-xl bg-white py-6 md:px-12">
            <div className='flex flex-col justify-center items-center md:flex-row md gap-6 lg:justify-start'>
                <div className='flex gap-4 px-6 md:border-r md:border-black'>
                    <div className='max-w-[70px]'>
                        <img src={logo} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-2xl font-bold'>Slowoposlowie</h3>
                        <h3 className='text-lg'>50 postów</h3>
                    </div>
                </div>
            
            <CustomLink
            className="inline-flex items-center justify-center w-full py-4 bg-[#303030] text-white text-xl rounded-md max-w-[240px]"
            to=''
            >
                Obserwuj nas!
            </CustomLink>    
        </div>

        <div className='flex flex-col gap-6 p-6 pt-12 items-center lg:flex-row'>
            <img src={img1}  className='w-full max-w-[450px]'/>
            <img src={img2} className='w-full max-w-[450px]'/>
            <img src={img3} className='w-full max-w-[450px]'/>
        </div>

        </div>
    </div>  
  )
}

export default InstaBanner