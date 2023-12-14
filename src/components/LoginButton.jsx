import React from "react";
import CustomLink from "./CustomLink";

const LoginButton = () => {
  return (
    <CustomLink to="/login">
      <button className="rounded-xl bg-[#303030] px-6 py-2 text-lg text-white md:py-[6px]">
        Zaloguj się
      </button>
    </CustomLink>
  );
};

export default LoginButton;
