import React from "react";
import Header from "../../components/Header";
import AboutFounder from "./AboutFounder";
import Specialists from "./Specialists";
import Reviews from "./Reviews";
import OurProducts from "./OurProducts";
import Blog from "./Blog";
import ProductBanners from "./ProductBanners";
import InstaBanner from "./InstaBanner";
import AboutUs from "./AboutUs";

const HomePage = () => {
  return (
    <div
      className={`flex w-full flex-col gap-[40px] bg-[#F6F6F6] bg-cover	`}
    >
      <Header />
      <ProductBanners />
      <Reviews />
      <InstaBanner />
      <AboutUs />
      <Blog />
    </div>
  );
};

export default HomePage;
