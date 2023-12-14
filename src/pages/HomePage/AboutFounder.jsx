import React from "react";
import avatar from "../../assets/anna-stachowiak-profile.png";
const AboutFounder = () => {
  return (
    <div className="flex items-center justify-center ">
      <article className="flex w-full  max-w-[1200px] flex-col p-6 md:flex-row md:items-center md:justify-center md:gap-6 lg:justify-center lg:gap-[200px]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="hidden w-full flex-col text-left text-xl font-semibold md:flex md:text-3xl">
            Założycielka <span>Słowo po słowie</span>
          </h2>
          <img
            src={avatar}
            className="w-[80vw] max-w-[300px] lg:max-w-[450px]"
          />
          <h3 className="hidden text-center text-xl font-semibold lg:block">
            Anna Stachowiak
          </h3>
        </div>
        <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white p-4 md:mt-[90px] md:items-start lg:mt-0 lg:items-end lg:self-end">
          <h3 className="text-center text-xl font-semibold md:text-left lg:hidden">
            Anna Stachowiak
          </h3>
          <p className="max-w-[500px] bg-white px-6 pt-2 text-justify md:px-0 md:text-left lg:max-w-[350px] lg:text-justify">
            Dr Anna Stachowiak to doświadczona logopedka i innowatorka w
            dziedzinie terapii mowy. Z pasją poświęca swoje życie pracy nad
            doskonaleniem procesu nauki i rozwijania umiejętności
            komunikacyjnych u dzieci i dorosłych. Dr Stachowiak jest uznaną
            autorką i twórczynią Kart Logopedycznych “Słowo po słowie”,
            innowacyjnego narzędzia terapeutycznego, które zdobyło uznanie wśród
            specjalistów i rodziców.
          </p>
        </div>
      </article>
    </div>
  );
};

export default AboutFounder;
