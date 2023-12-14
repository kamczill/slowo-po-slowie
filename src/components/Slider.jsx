import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: "auto",
      spacing: 50,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="relative max-w-[90vw] md:max-w-[80vw] lg:max-w-[1200px]">
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
        {loaded && instanceRef.current && (
          <>
            <div
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className="absolute -left-[80px] top-[61.5px] hidden  cursor-pointer items-center rounded-2xl bg-[#8A8A8A45] px-2 py-5 text-white hover:bg-[#afafaf] md:flex"
            >
              <Arrow left disabled={currentSlide === 0} />
            </div>
            <div
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className="absolute -right-[80px] top-[61.5px]  hidden cursor-pointer items-center rounded-2xl bg-[#8A8A8A45] px-2 py-5 text-white hover:bg-[#afafaf] md:flex"
            >
              <Arrow
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow h-8 w-8 ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld} fill-white text-white`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Slider;
