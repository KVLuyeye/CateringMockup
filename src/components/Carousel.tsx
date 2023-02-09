import React, { ReactNode, useEffect, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "../assets/icons/Icons";

export const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <div className=" overflow-hidden">
      {/*inner carousel */}
      <div
        className="  whitespace-nowrap transition-transform delay-300"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="mt-4 hidden justify-center lg:flex">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className=" "
        >
          <ArrowBackIcon />
        </button>

        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className=""
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export const CarouselItem = ({ children, width, image }: any) => {
  return (
    <div
      className=" inline-flex h-[15em] items-center justify-center"
      style={{ width: width, backgroundImage: image }}
    >
      {children}
    </div>
  );
};

export default Carousel;
