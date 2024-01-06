import React from "react";
import blogImg1 from "./../../assets/blog-img1.png";
import blogImg2 from "./../../assets/blog-img2.png";
import blogImg3 from "./../../assets/blog-img3.png";
import BlogCard from "../../components/BlogCard";
import {articlesData} from './../../data/articles'

const Blog = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-8 flex w-full max-w-[1200px] flex-col rounded-xl bg-white py-6">
        <h2 className="text-center text-3xl font-semibold">Aktualności</h2>
        <div className="mb-8 mt-8 flex flex-col items-center gap-12 md:flex-row md:gap-4 md:justify-between md:items-start md:px-12">
          {articlesData.map((article) => 
          <BlogCard 
            key={article.id}
            blogImg={article.coverImg}
            title={article.title}
            url={`/aktualnosci/${article.id}`}
          />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
