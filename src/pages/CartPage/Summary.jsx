import React from "react";
import CustomLink from "../../components/CustomLink";

const Summary = ({ subtotalPrice, totalPrice }) => {
  return (
    <div className="flex h-full w-full max-w-[560px] flex-col justify-between gap-4 bg-white p-6 md:min-h-[470px] md:max-w-[370px]">
      <div>
        <h2 className="text-center text-xl font-semibold">Podsumowanie</h2>
        <div className="mt-8 flex flex-col gap-4 text-lg">
          <div className="inline-flex justify-between">
            <p>Suma częściowa</p>
            <span>{subtotalPrice} zł</span>
          </div>
          <div className="inline-flex justify-between">
            <p>Razem</p>
            <span>{totalPrice} zł</span>
          </div>
        </div>
        <div className="mt-8 inline-flex w-full">
          <input
            className="w-full border border-[#303030] px-2"
            placeholder="Kod rabatowy"
          />
          <button className="bg-[#303030] px-4 py-1 text-white">Dodaj</button>
        </div>
      </div>
      <button
        type="submit"
        className="mt-12 w-full max-w-[350px] rounded-md bg-[#303030]  p-3 text-center text-white"
      >
        <CustomLink to="">Przejdź do kasy</CustomLink>
      </button>
    </div>
  );
};

export default Summary;
