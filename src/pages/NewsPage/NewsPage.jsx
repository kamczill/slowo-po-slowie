import React from "react";
import Article from "../../components/Article";
import { articlesData } from "../../data/articles";

const NewsPage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center bg-[#F6F6F6]">
      <div className="my-8 flex w-full max-w-[1400px] flex-col items-center gap-[90px] bg-white px-6 py-8 md:px-8 lg:px-14">
      {articlesData.map((article) => 
          <Article
            key={article.id}
            blogImg={article.coverImg}
            title={article.title}
            excerpt={article.excerpt}
            url={`/aktualnosci/${article.id}`}
          />
          )}
      </div>
    </div>
  );
};

export default NewsPage;
