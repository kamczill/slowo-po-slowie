import React from "react";
import { useParams } from "react-router-dom";
import placeholder from "./../../assets/blog-placeholder.png";
import { articlesData } from "../../data/articles";
const NewsDetailPage = () => {
  const {id} = useParams();
  const article = articlesData.find(article => article.id === id)
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="my-8 flex w-full max-w-[1400px] flex-col items-start gap-8 bg-white px-6 py-8 md:flex-row md:px-8 lg:px-14">
        <div className="w-full shrink-0 grow md:max-w-[30vw] lg:max-w-[20vw]">
          <img src={article?.coverImg} className="w-full" />
        </div>
        <main className="flex flex-col gap-4 lg:px-10">
          <h2 className="pt-4 text-center text-3xl font-semibold">{article?.title}</h2>
          <div className="flex flex-col gap-4 lg:px-10" dangerouslySetInnerHTML={{__html: article?.content}} />
        </main>
      </div>
    </div>
  );
};

export default NewsDetailPage;
