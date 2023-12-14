import React from "react";
import { Link, useParams } from "react-router-dom";
import placeholder from "./../../assets/blog-placeholder.png";

import ShopCard from "../../components/ShopCard";
import ShopNav from "../../components/ShopNav";

const ShopPage = () => {
  const { category } = useParams();
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="flex w-full max-w-[1400px] flex-col gap-8 px-6 py-8 md:flex-row md:px-8 lg:px-14 ">
        <ShopNav />

        <div className="w-full bg-white p-6">
          <h2 className="text-left text-3xl font-semibold">
            {category ? category : "Wszystkie produkty"}
          </h2>
          <main className="mt-12 flex flex-col gap-10 text-lg">
            <ShopCard
              img={placeholder}
              title="Karty do gry “Słowo po słowie”"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
              price="100.00"
            />
            <ShopCard
              img={placeholder}
              title="Karty do gry “Słowo po słowie”"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
              price="100.00"
            />
            <ShopCard
              img={placeholder}
              title="Karty do gry “Słowo po słowie”"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
              price="100.00"
            />
            <ShopCard
              img={placeholder}
              title="Karty do gry “Słowo po słowie”"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"
              price="100.00"
              lastItem
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
