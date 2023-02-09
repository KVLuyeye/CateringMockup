import React from "react";
import { HeadNav } from "../components/HeadNav";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import HeroImage from "../assets/pics/SP_Logo.jpg";
import Carousel, { CarouselItem } from "../components/Carousel";
import { motion } from "framer-motion";

export const Landing = () => {
  return (
    <>
      <HeadNav />
      <Hero image={HeroImage} height="15rem" />

      <section
        className=" z-50  ml-16 
      mr-16 grid h-[90rem] 
      items-center  justify-center justify-items-center
      md:mr-20 md:ml-20 md:h-[100rem] md:grid-cols-[30rem_30rem] "
      >
        <div className="mt-12 flex flex-col items-start lg:pl-8">
          <h1 className="text-2xl font-bold md:text-4xl lg:pb-4  ">
            Bienvenue
          </h1>

          <p className=" ml-0 mt-6 mb-6 text-left  md:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aspernatur ratione quo inventore maxime adipisci beatae, illum
            minima quaerat facilis ducimus est totam alias explicabo cupiditate
            ipsam possimus qui ipsum!
          </p>

          <button className=" h-12 rounded-md border border-solid bg-green-800 p-2 text-white transition delay-100 ease-in-out hover:border-green-800 hover:bg-white hover:text-green-800">
            {" "}
            Découvrez notre menu
          </button>
        </div>

        {/* Image div */}
        <div className="mt-4 h-[15em] w-full rounded border border-solid  border-black shadow-xl md:h-1/2 md:w-[70%] "></div>

        {/* Image div */}
        <div className="mt-4 h-[15em] w-full rounded border border-solid border-black shadow-xl md:h-1/2 md:w-[70%] "></div>

        <div className=" mt-6 flex flex-col items-start lg:pl-8">
          <h1 className="text-2xl font-bold md:text-4xl lg:pb-4"> Header 2</h1>

          <p className="ml-0 mt-6 mb-6 text-left  md:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            aspernatur deleniti sed labore rem illum exercitationem laudantium
            iusto, repellat nesciunt quas ratione eos accusantium dolor quia
            corporis sequi? Architecto, qui.
          </p>

          <button className=" h-12 rounded-md border border-solid bg-green-800 p-2 text-white transition delay-100 ease-in-out hover:border-green-800 hover:bg-white hover:text-green-800">
            {" "}
            Contactez-nous !
          </button>
        </div>

        {/* Carousel */}
        <div
          className=" mt-4 h-[15em] w-full
        rounded border border-solid border-black shadow-xl
        md:col-span-2 md:h-1/2 md:w-[40%]"
        >
          <Carousel>
            <CarouselItem> Item 1</CarouselItem>
            <CarouselItem> Item 2</CarouselItem>
            <CarouselItem> Item 3</CarouselItem>
          </Carousel>
        </div>
      </section>

      <Footer />
    </>
  );
};
