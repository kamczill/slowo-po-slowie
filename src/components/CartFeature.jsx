import React from "react";
import CustomLink from "./CustomLink";
const CartFeature = ({ onClick }) => {
  return (
    <div className="fixed right-0 top-20 z-10 flex min-h-[400px] w-screen max-w-[500px] flex-col justify-between gap-5 border bg-white p-6 shadow-2xl sm:right-20 sm:top-[90px] md:absolute md:right-6 md:top-[100px]">
      <div>
        <h2 className="border-b-2 border-black pb-3 text-xl font-semibold">
          Mój koszyk
        </h2>
        <div>
          <div className="flex justify-between border-b-2 border-black py-3">
            <h3>Karty do gry "Słowo po Słowie"</h3>
            <span>50zł</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <p>
          Razem: <span>100,00 zł</span>
        </p>
        <CustomLink
          to="/koszyk"
          className="w-full rounded-xl bg-[#303030] px-6 py-2 text-center text-lg text-white"
          onClick={onClick}
        >
          Przejdź do koszyka
        </CustomLink>
        <button
          onClick={onClick}
          className="w-full rounded-xl px-6 py-2 text-lg text-black"
        >
          lub kontynuuj zakupy
        </button>
      </div>
    </div>
  );
};

export default CartFeature;
