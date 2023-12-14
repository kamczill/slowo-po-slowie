import React from "react";
import headerImg from "./../assets/header.png";
import { IoArrowForward } from "react-icons/io5";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <header>
      <div className="relative">
        <img
          src={headerImg}
          className="h-[50vh] w-full object-cover object-left"
        />
        <div className="absolute bottom-1 left-1/2 right-0 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center md:bottom-0 md:left-[250px]">
          <h2 className="max-w-[240px] text-center text-3xl font-semibold text-white lg:text-4xl">
            Z nami
          </h2>
          <h2 className="max-w-[240px] text-center text-3xl font-semibold text-white lg:text-4xl">
            do poprawnej mowy!
          </h2>

          <CustomLink
            className="mt-4 flex items-center gap-1 text-xl text-white"
            to="sklep/szkolenia"
          >
            Nasze szkolenia
            <IoArrowForward />
          </CustomLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
