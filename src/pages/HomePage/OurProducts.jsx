import React from "react";
import cards from "./../../assets/cards.png";
import course from "./../../assets/course.png";
import ebooks from "./../../assets/e-books.png";
import ProductCardWithButton from "../../components/ProductCardWithButton";

const OurProducts = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1200px] flex-col rounded-xl bg-[#F6F6F6] py-6">
        <h2 className="text-center text-3xl font-semibold">
          Zobacz co u nas znajdziesz
        </h2>
        <div className="mb-8 mt-8 flex flex-col items-center gap-12 md:flex-row md:justify-between md:px-12">
          <ProductCardWithButton
            productImg={cards}
            title="Karty do nauki"
            url="sklep/karty"
          />
          <ProductCardWithButton
            productImg={course}
            title="Szkolenia"
            url="sklep/szkolenia"
          />
          <ProductCardWithButton
            productImg={ebooks}
            title="E-booki"
            url="sklep/e-booki"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
