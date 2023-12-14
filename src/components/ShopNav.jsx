import React from "react";
import CustomLink from "./CustomLink";
const ShopNav = () => {
  return (
    <div className="w-full bg-white p-6 md:h-[400px] md:max-w-[300px]">
      <CustomLink to="/sklep">
        <h2 className="text-left text-3xl font-semibold">Sklep</h2>
      </CustomLink>
      <nav className="mt-6 flex flex-col gap-4 text-lg">
        <CustomLink to="/sklep/karty">Karty do gry</CustomLink>
        <CustomLink to="/sklep/szkolenia">Szkolenia</CustomLink>
        <CustomLink to="/sklep/e-booki">E-booki</CustomLink>
      </nav>
    </div>
  );
};

export default ShopNav;
