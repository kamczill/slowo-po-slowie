import React from 'react'
import blogImg from './../../assets/blog.png'
import Article from '../../components/Article';


const NewsPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center justify-center'>
        <div className='mt-8 py-8 max-w-[1400px] px-6 bg-white w-full md:px-8 flex flex-col items-center gap-[90px] lg:px-14'>
            <Article 
                blogImg={blogImg}
                title='Tekst 1'
                excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                url='/aktualnosci/1'
            />
            <Article 
                blogImg={blogImg}
                title='Tekst 1'
                excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                url='/aktualnosci/2'
            />
            <Article 
                blogImg={blogImg}
                title='Tekst 1'
                excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                url='/aktualnosci/3'
                lastArticle
            />
        </div>
    </div>
  )
}

export default NewsPage