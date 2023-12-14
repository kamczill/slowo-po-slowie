import React from "react";
import Header from "../../components/Header";
import AboutFounder from "./AboutFounder";
import Specialists from "./Specialists";
import Reviews from "./Reviews";
import OurProducts from "./OurProducts";
import Blog from "./Blog";

const HomePage = () => {
  return (
    <div
      className={`flex w-full flex-col gap-[40px] bg-[url("/background.png")] bg-cover	`}
    >
      <Header />
      <AboutFounder />
      <Specialists />
      <Reviews />
      <OurProducts />
      <Blog />
    </div>
  );
};

export default HomePage;
