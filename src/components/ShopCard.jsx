import React from "react";
import { IoBagOutline } from "react-icons/io5";
import CustomLink from "./CustomLink";

const ShopCard = ({ img, title, excerpt, price, id = 1, lastItem }) => {
  return (
    <div
      className={`flex flex-col gap-12 border-b border-black pb-12 md:flex-row ${
        lastItem && "border-none"
      } grow-1 shrink-0`}
    >
      <div className="mx-auto max-h-[300px] w-full max-w-[200px] shrink-0">
        <img src={img} className="h-full w-full" />
      </div>
      <div className="mt-4 flex flex-col gap-6">
        <h3 className="text-center text-xl font-semibold md:text-left">
          <CustomLink to={`/sklep/produkty/${id}`}>{title}</CustomLink>
        </h3>
        <p className="text-justify">{excerpt}</p>
        <div className="flex gap-6 text-xl">
          <span>{price} zł</span>
          <button className="px-4">
            <IoBagOutline className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
