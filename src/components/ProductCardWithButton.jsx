import React from "react";
import CustomLink from "./CustomLink";

const ProductCardWithButton = ({ productImg, title, url }) => {
  const handleScrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <article className="flex flex-col gap-4">
      <div className="max-w-[270px]">
        <img src={productImg} className="w-full" />
      </div>
      <h2 className="text-center text-3xl font-semibold">{title}</h2>
      <CustomLink
        to={url}
        onClick={handleScrollToTop}
        className="rounded-xl bg-[#8DBBD2] px-3 py-2 text-center text-white hover:bg-[#a9cddf]"
      >
        dowiedz się więcej
      </CustomLink>
    </article>
  );
};

export default ProductCardWithButton;
