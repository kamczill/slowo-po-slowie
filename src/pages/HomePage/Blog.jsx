import React from 'react'
import blogImg from './../../assets/blog.png'
import BlogCard from '../../components/BlogCard';

const Blog = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='bg-[#F6F6F6] flex flex-col w-full max-w-[1200px] rounded-xl py-6'>
            <h2 className='font-semibold text-3xl text-center'>Blog</h2>
            <div className='flex flex-col items-center gap-12 mt-8 mb-8 md:flex-row md:justify-between md:px-12'>
                <BlogCard
                    blogImg={blogImg}
                    title='Tekst 1'
                    excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It"
                    url='#'
                />
                <BlogCard
                    blogImg={blogImg}
                    title='Tekst 2'
                    excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It"
                    url='#'
                />
                <BlogCard
                    blogImg={blogImg}
                    title='Tekst 3'
                    excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It"
                    url='#'
                />
            </div>
        </div>
    </div>
  )
}

export default Blog