import React from 'react'
import { IoChevronForward } from "react-icons/io5";
import CustomLink from './CustomLink';

const BlogCard = ({blogImg, title, excerpt, url}) => {
    return(
        <article className='flex flex-col gap-4 max-w-[270px]'>
            <div className='max-w-[270px]'>
                <img src={blogImg} className='w-full'/>
            </div>
            <h2 className='font-semibold text-3xl text-center'>{title}</h2>
            <p className='text-center font-semibold'>{excerpt}</p>
            <CustomLink className='uppercase font-semibold text-lg inline-flex items-center justify-center gap-2' to={url}>czytaj dalej <IoChevronForward className='text-2xl' /> </CustomLink>
        </article>
    )
}

export default BlogCard