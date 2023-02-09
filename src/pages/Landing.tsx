import React from "react";
import { HeadNav } from "../components/HeadNav";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import HeroImage from "../assets/pics/SP_Logo.jpg";
import Carousel, { CarouselItem } from "../components/Carousel";
import { motion } from "framer-motion";
import HeroVid from "../assets/videos/herovid.mp4";
import Plate4 from "../assets/pics/Presentation_Plate4.jpg";
import Plate1 from "../assets/pics/Presentation_Plate1.jpg";
import Plate2 from "../assets/pics/Presentation_Plate2.jpg";
import Plate3 from "../assets/pics/Presentation_Plate3.jpg";
import Condiments from "../assets/pics/Product_Condiments.jpg";

export const Landing = () => {
  return (
    <>
      <HeadNav />
      <Hero video={HeroVid} />
      <section
        className=" z-50  ml-16 
      mr-16 grid h-[90rem] 
      items-center  justify-center justify-items-center
      md:mr-20 md:ml-20 md:h-[100rem] md:grid-cols-[30rem_30rem] "
      >
        {/*Description */}
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
            Découvrez notre menu
          </button>
        </div>

        {/* Image div */}
        <motion.div
          className="mt-6 h-[15em] w-full
          rounded 
          bg-cover bg-center bg-no-repeat shadow-xl
          md:h-1/2 md:w-[70%]"
          initial={{ translateX: 250, opacity: 0.25 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ backgroundImage: `url(${Plate4})` }}
        ></motion.div>

        {/* Image div */}
        <motion.div
          className="mt-4 h-[15em] w-full
        rounded 
        bg-cover bg-center bg-no-repeat shadow-xl
        md:h-1/2 md:w-[70%] "
          style={{ backgroundImage: `url(${Condiments})` }}
          initial={{ translateX: -250, opacity: 0.25 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>

        {/*Description */}
        <div className=" mt-6 flex flex-col items-start lg:pl-8">
          <h1 className="text-2xl font-bold md:text-4xl lg:pb-4"> Header 2</h1>

          <p className="ml-0 mt-6 mb-6 text-left  md:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            aspernatur deleniti sed labore rem illum exercitationem laudantium
            iusto, repellat nesciunt quas ratione eos accusantium dolor quia
            corporis sequi? Architecto, qui.
          </p>

          <button className=" h-12 rounded-md border border-solid bg-green-800 p-2 text-white transition delay-100 ease-in-out hover:border-green-800 hover:bg-white hover:text-green-800">
            Contactez-nous !
          </button>
        </div>

        {/* Carousel */}
        <div
          className=" mt-4 h-[15em] w-full
        rounded shadow-xl
        md:col-span-2 md:h-[22em] md:w-[40%] "
        >
          <Carousel>
            <CarouselItem>
              <div
                className="
                h-[15em] w-full rounded 
                bg-cover bg-center bg-no-repeat
                md:h-[22em] md:w-[100%]"
                style={{ backgroundImage: `url(${Plate1})` }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="
                h-[15em] w-full rounded 
                bg-cover bg-center bg-no-repeat
                md:h-[20em] md:w-[100%]"
                style={{ backgroundImage: `url(${Plate2})` }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="
                h-[15em] w-full rounded 
                bg-cover bg-center bg-no-repeat
                md:h-[20em] md:w-[100%]"
                style={{ backgroundImage: `url(${Plate3})` }}
              ></div>
            </CarouselItem>
          </Carousel>
        </div>
      </section>
      <Footer />
    </>
  );
};
