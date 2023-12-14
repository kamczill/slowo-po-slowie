import React from "react";
import CustomLink from "./CustomLink";
import { IoChevronForward } from "react-icons/io5";

const Article = ({ blogImg, title, excerpt, url, lastArticle }) => {
  return (
    <article className="relative flex max-w-[470px] flex-col gap-6 md:max-w-full md:flex-row md:items-center md:justify-center">
      <div className="w-full max-w-[570px] shrink-0 grow md:max-w-[300px]">
        <img src={blogImg} className="w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl font-bold md:text-start">
          {title}
        </h2>
        <p className="text-center leading-6 md:text-start">{excerpt}</p>
        <CustomLink
          className="inline-flex items-center justify-center gap-2 text-lg uppercase md:justify-start"
          to={url}
        >
          czytaj dalej <IoChevronForward className="text-2xl" />{" "}
        </CustomLink>
      </div>
      <div
        className={`absolute -bottom-11 left-0 right-0 m-auto w-[90%] border-b-2 border-black ${
          lastArticle && "border-none"
        }`}
      ></div>
    </article>
  );
};

export default Article;
