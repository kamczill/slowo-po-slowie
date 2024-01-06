import React from "react";
import { IoChevronForward } from "react-icons/io5";
import CustomLink from "./CustomLink";

const BlogCard = ({ blogImg, title, excerpt, url }) => {
  return (
    <article className="flex w-full max-w-[317px] flex-col gap-4">
      <div className="w-full max-w-[317px]">
        <img src={blogImg} className="w-full" />
      </div>
      <h2 className="text-center text-xl font-semibold">{title}</h2>
      <p className="text-center font-semibold">{excerpt}</p>
      <CustomLink
        className="inline-flex items-center justify-center gap-2 text-md font-semibold uppercase"
        to={url}
      >
        czytaj dalej <IoChevronForward className="text-2xl" />{" "}
      </CustomLink>
    </article>
  );
};

export default BlogCard;
