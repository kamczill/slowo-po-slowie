import React, { useState, useEffect } from "react";
import logo from "./../assets/logo.png";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import CartFeature from "./CartFeature";
import LoginButton from "./LoginButton";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";
import { useCart } from "../contexts/cartContext";
import { useAuth } from "../contexts/authContext";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { user } = useAuth()
  let location = useLocation();
  const { cart } = useCart()
  let cartItemsLenght = cart.length

  const handleToggleMobileNav = () => {
    if (isOpenCart) setIsOpenCart(false);
    setIsOpenMobileNav(!isOpenMobileNav);
  };

  const handleToggleCart = () => {
    if (isOpenMobileNav) setIsOpenMobileNav(false);
    setIsOpenCart(!isOpenCart);
  };

  useEffect(() => {
    if (window.innerWidth < 900) setIsOpenMobileNav(false);
  }, [location]);

  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:p-8">
        <div className="w-1/3 max-w-[170px]  lg:max-w-[192px]">
          <CustomLink to="/">
            <img src={logo} className="w-full" />
          </CustomLink>
        </div>
        <div className="hidden md:block">
          <nav className="flex items-center gap-4 text-xl">
            <NavLinks />
          </nav>
        </div>
        <div className="hidden md:block">
        { user ? <LogoutButton />: <LoginButton />}
        </div>
        <div className="relative flex items-center gap-6">
          <div className="relative" onClick={handleToggleCart}>
            <IoCartOutline className="text-4xl" />
            <div className="absolute right-[-8px] top-[-4px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-red-500 text-white">
              {cartItemsLenght}
            </div>
          </div>
          <div className="relative md:hidden" onClick={handleToggleMobileNav}>
            {isOpenMobileNav ? (
              <IoClose className="text-4xl" />
            ) : (
              <IoMenu className="text-4xl" />
            )}
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`${
            isOpenMobileNav ? "" : "hidden"
          } absolute bottom-[-420px] left-0 z-10 w-screen bg-white px-6 py-6 md:hidden`}
        >
          <nav className="flex flex-col items-center gap-6 text-2xl">
            <NavLinks />
            { user ? <LogoutButton />: <LoginButton />}
          </nav>
        </div>

        {/* cart */}
        {isOpenCart && <CartFeature isOpen={isOpenCart} onClick={handleToggleCart} />}
      </div>
    </div>
  );
};

export default Navbar;
