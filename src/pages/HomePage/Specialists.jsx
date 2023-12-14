import React from "react";
import lauraAvatar from "./../../assets/specialist-avatar.png";
import Slider from "../../components/Slider";
import SpecialistCard from "../../components/SpecialistCard";

const Specialists = () => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-[#F6F6F6] py-6">
      <h2 className="text-center text-3xl font-semibold">
        Poznaj naszych specjalistów:
      </h2>
      <Slider>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
        <div className="keen-slider__slide flex w-full justify-center">
          <SpecialistCard
            avatar={lauraAvatar}
            name="Laura"
            surname="Molińska"
            city="Luboń"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Specialists;
