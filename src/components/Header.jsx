import React from "react";
import headerImg from "./../assets/header.png";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <header className="w-full flex justify-center pt-[64px]">
      <div className="relative max-w-[1200px]">
        <img
          src={headerImg}
          className="h-[60vh] w-full object-cover object-right md:object-center"
        />
        <div className="absolute bottom-1 left-1/2 right-0 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center md:bottom-[-50px] md:left-[150px]">
          <h2 className="max-w-[240px] text-center text-3xl font-semibold text-white lg:text-4xl">
            Z nami
          </h2>
          <h2 className="max-w-[240px] text-center text-3xl font-semibold text-white lg:text-4xl">
            do poprawnej mowy!
          </h2>

          <CustomLink
        className="inline-flex items-center justify-center w-full py-4 mt-6 bg-[#303030] text-white text-xl rounded-md max-w-[240px]"
        to=''
      >
        Nasze szkolenie
      </CustomLink>    
        </div>
      </div>
    </header>
  );
};

export default Header;
