import React from "react";
import blogImg from "./../../assets/blog.png";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-8 flex w-full max-w-[1200px] flex-col rounded-xl bg-[#F6F6F6] py-6">
        <h2 className="text-center text-3xl font-semibold">Blog</h2>
        <div className="mb-8 mt-8 flex flex-col items-center gap-12 md:flex-row md:justify-between md:px-12">
          <BlogCard
            blogImg={blogImg}
            title="Tekst 1"
            excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It"
            url="/aktualnosci/1"
          />
          <BlogCard
            blogImg={blogImg}
            title="Tekst 2"
            excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It"
            url="/aktualnosci/2"
          />
          <BlogCard
            blogImg={blogImg}
            title="Tekst 3"
            excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It"
            url="/aktualnosci/1"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
