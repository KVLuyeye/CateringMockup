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
import { ImageDiv } from "../components/ImageDiv";
import { MainBtn } from "../components/MainBtn";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <HeadNav />
      <Hero video={HeroVid} />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="
      ml-16 mr-16
      grid h-[115rem] items-center
      justify-center  justify-items-center 
      lg:ml-0 lg:mr-0 lg:h-[150rem] lg:grid-cols-[30rem_30rem] lg:pr-20 lg:pl-20 "
      >
        {/*Description */}
        <div className="mt-12 flex flex-col items-start lg:pl-8">
          <h1 className="font-serif text-2xl font-bold md:text-4xl lg:pb-4  ">
            Bienvenue
          </h1>

          <p className=" ml-0 mt-6 mb-6 text-left  md:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aspernatur ratione quo inventore maxime adipisci beatae, illum
            minima quaerat facilis ducimus est totam alias explicabo cupiditate
            ipsam possimus qui ipsum!
          </p>

          <MainBtn value="Découvrez notre menu" />
        </div>

        {/* Image div */}
        <ImageDiv url={Plate4} />

        {/* Image div */}
        <ImageDiv url={Condiments} />

        {/*Description */}
        <div className=" mt-6 flex flex-col items-start md:pl-8">
          <h1 className="font-serif text-2xl font-bold md:text-4xl lg:pb-4">
            {" "}
            Header 2
          </h1>

          <p className="ml-0 mt-6 mb-6 text-left  md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            aspernatur deleniti sed labore rem illum exercitationem laudantium
            iusto, repellat nesciunt quas ratione eos accusantium dolor quia
            corporis sequi? Architecto, qui.
          </p>

          <Link to="/réservation">
            {" "}
            <MainBtn value="Contactez-nous !" />
          </Link>
        </div>

        {/* Carousel */}
        <div
          className="mt-8 mb-8 h-[15em]
        w-full rounded
        md:col-span-2 lg:h-[50em] lg:w-[100%] "
        >
          <Carousel>
            <CarouselItem>
              <div
                className="
                h-[15em] w-full rounded 
                bg-cover bg-center bg-no-repeat
                md:w-[60%] lg:h-[40em]"
                style={{ backgroundImage: `url(${Plate1})` }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="
                h-[15em] w-full rounded 
                bg-cover bg-center bg-no-repeat
                md:w-[60%] lg:h-[40em]"
                style={{ backgroundImage: `url(${Plate2})` }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="
                h-[15em] w-full rounded 
                bg-cover bg-center bg-no-repeat
                md:w-[60%] lg:h-[40em]"
                style={{ backgroundImage: `url(${Plate3})` }}
              ></div>
            </CarouselItem>
          </Carousel>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};
