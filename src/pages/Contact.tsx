import Footer from "../components/Footer";
import { HeadNav } from "../components/HeadNav";
import { MainBtn } from "../components/MainBtn";
import { motion } from "framer-motion";
import ContactImage from "../assets/pics/contactImage2.jpg";
import { InstaIcon } from "../assets/icons/Icons";
import { useEffect, useRef, useState } from "react";
import SPLogo from "../assets/pics/SP_Logo_Transparent.png";

export const Contact = () => {
  const name: any = useRef();
  const email: any = useRef();
  const num: any = useRef();
  const date: any = useRef();
  const place: any = useRef();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({
      Name: name.current.value,
      Email: email.current.value,
      Number: num.current.value,
      Date: date.current.value,
      Place: place.current.value,
    });
  };
  return (
    <>
      <HeadNav />
      <div
        className=" absolute top-[5%] left-[25%] z-40
          h-[10%] w-[50%] bg-contain bg-center bg-no-repeat
          text-red-600
          md:left-[26.5%] md:top-[0%] md:h-[16%] md:w-1/2
          lg:hidden"
        style={{ backgroundImage: `url(${SPLogo})` }}
      ></div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid bg-[#1D1E1D] lg:grid-cols-2 lg:pt-20  "
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col
        border-solid border-black bg-[#323330]
        p-4 text-left font-serif
        lg:rounded-tl-xl lg:pt-24 lg:pb-24 lg:pr-32 lg:pl-32"
        >
          <h1 className=" text-center text-2xl font-bold italic text-white lg:text-3xl">
            Demande de devis et informations
            <p className="text-gray-500">___________</p>
          </h1>

          <p className="mt-6 text-center font-serif italic text-gray-300 lg:p-[1.5em] lg:text-xl">
            Laissez-nous vos coordonnées et nous vous contacterons dans les
            meilleurs délais
          </p>

          <p className="mt-8 text-left italic text-white">
            Votre nom et prénom
          </p>
          <input
            ref={name}
            aria-label="Name"
            name="name"
            type="text"
            placeholder="Nom et prénom..."
            className="
            ml-8 mr-8 mt-2 h-8
            border border-t-0 border-l-0 border-r-0 border-solid border-white
            bg-[#323330] text-white
            transition-all duration-[0.5s]
            focus-visible:border-green-600  focus-visible:outline-none"
          />

          <p className="mt-8 text-left italic text-white">
            Votre adresse e-mail
          </p>
          <input
            ref={email}
            name="email"
            type="email"
            placeholder="Email..."
            className="ml-8 mr-8 mt-2 h-8
            border border-t-0 border-l-0 border-r-0 border-solid
            bg-[#323330] text-white
            transition-all duration-[0.5s]
            focus-visible:border-green-600 focus-visible:outline-none"
          />

          <p className="mt-8 text-left italic text-white">
            Votre numéro de téléphone
          </p>
          <input
            ref={num}
            name="phone"
            aria-label="téléphone"
            placeholder="Télephone..."
            type="tel"
            className="ml-8 mr-8 mt-2 h-8
            border border-t-0 border-l-0 border-r-0 border-solid border-white
            bg-[#323330] text-white
            transition-all duration-[0.5s]
            focus-visible:border-green-600 focus-visible:outline-none "
          />

          <p className="mt-20 text-center italic text-white">
            Date et lieu de l'évenement
          </p>
          <input
            ref={date}
            name="date"
            aria-label="Date"
            placeholder="Date"
            type="date"
            className="ml-8 mr-8 mt-2 h-8
            border border-t-0 border-l-0 border-r-0 border-solid border-white
            bg-[#323330] text-white
            transition-all duration-[0.5s]
            focus-visible:border-green-600 focus-visible:outline-none"
          />

          <input
            ref={place}
            name="city"
            aria-label="Place"
            placeholder="Lieu"
            type="text"
            className="ml-8 mr-8 mt-2 h-8
            border border-t-0 border-l-0 border-r-0 border-solid border-white
            bg-[#323330] text-white
            transition-all duration-[0.5s]
            focus-visible:border-green-600 focus-visible:outline-none"
          />
          <textarea
            aria-label="text-area"
            placeholder="Parlez-nous de votre événement avec le plus de précisions possibles..."
            rows={10}
            name=""
            className="
            ml-8 mr-8 mb-6 mt-10 rounded border border-white
          bg-[#323330] p-2 text-white
          transition-all duration-[0.5s]
          focus-visible:bg-white focus-visible:text-black focus-visible:outline-none"
          ></textarea>
          <div className="ml-8 mb-8">
            <MainBtn value="Envoyer" />
          </div>
        </form>

        <div
          className=" hidden rounded-tr-xl bg-cover bg-center bg-no-repeat brightness-[0.35] focus-visible:outline-none lg:block"
          style={{ backgroundImage: `url(${ContactImage})` }}
        ></div>
      </motion.section>
      <Footer />
    </>
  );
};
