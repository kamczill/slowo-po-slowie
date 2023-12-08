import React from 'react'
import CustomLink from './CustomLink';
import { IoChevronForward } from "react-icons/io5";

const Article = ({blogImg, title, excerpt, url, lastArticle}) => {
    return (
        <article className='relative flex flex-col gap-6 max-w-[470px] md:flex-row md:max-w-full md:justify-center md:items-center'>
            <div className='max-w-[570px] w-full md:max-w-[300px] grow shrink-0'>
                <img src={blogImg} className='w-full'/>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-3xl text-center md:text-start'>{title}</h2>
                <p className='text-center md:text-start leading-6'>{excerpt}</p>
                <CustomLink className='uppercase text-lg inline-flex items-center justify-center gap-2 md:justify-start' to={url}>czytaj dalej <IoChevronForward className='text-2xl' /> </CustomLink>
            </div>
            <div className={`absolute -bottom-11 border-b-2 border-black w-[90%] m-auto left-0 right-0 ${lastArticle && 'border-none'}`}></div>
        </article>
    )
}

export default Article