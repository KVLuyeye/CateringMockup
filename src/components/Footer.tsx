import React from "react";
import SPLogoTrans from "../assets/pics/SP_Logo_Transparent.png";
import { InstaIcon } from "../assets/icons/Icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="grid h-[50rem]
     content-center items-center justify-center justify-items-center 
     bg-[#1B1B1B] pb-4 text-white 
    md:mt-0  md:pl-12 md:pr-12 lg:h-[30rem] lg:w-full lg:grid-cols-[25em_25em_25em]"
    >
      {/*Logo Image */}
      <div
        className=" mt-8 mb-8 h-[8em] w-full
         bg-contain bg-center bg-no-repeat 
         md:w-full lg:m-0 lg:h-3/4"
        style={{ backgroundImage: `url(${SPLogoTrans})` }}
      ></div>

      {/*DIV for contact Info */}
      <div className="flex w-full flex-col text-left ">
        <p className="mb-3 text-xl">
          <b>Contact</b>
        </p>
        <p className="mt-4">
          <b> Numéro de téléphone:</b> +41 77 123 45 67
        </p>
        <p className="mt-4">
          <b> Adresse e-mail:</b>{" "}
          <span className="text-[#F5C443]">saveurspepe@gmail.com</span>
        </p>

        <p className="mt-4">
          <b>Horaire: </b> du Lundi au Samedi de 11h à 19h <br /> Fermé le
          Dimanche
        </p>

        {/* Instagram Icon */}

        <a href="https://www.instagram.com/saveurpepe/">
          <button className=" mt-8 rounded-lg p-1 ">
            <InstaIcon className=" fill-white hover:fill-[#F5C443]" />
          </button>
        </a>
      </div>

      {/**  <div className=" mt-8 md:text-left"> */}

      {/* Separation line */}
      <p className="text-gray-600 md:hidden">
        {" "}
        ____________________________________
      </p>

      {/*Quick Links */}
      <div className="flex w-full flex-col">
        <p className="mt-2 mb-6 text-left text-xl lg:mt-0">
          <b>Liens utiles</b>
        </p>

        <Link to="/">
          <p className="pt-1 text-left text-gray-400">Accueil</p>
        </Link>
        <Link to="/nos-buffets">
          <p className="pt-1 text-left text-gray-400 lg:mt-2">Nos Buffets</p>
        </Link>
        <Link
          to="/réservation"
          className="pt-1 text-left text-gray-400 lg:mt-2"
        >
          Réservation
        </Link>
        <p className="pt-1 text-left text-gray-400 lg:mb-[4.5rem] lg:mt-2">
          Notre Histoire
        </p>
      </div>
    </footer>
  );
};

export default Footer;
