import React from "react";
import SPLogoTrans from "../assets/pics/SP_Logo_Transparent.png";
import { InstaIcon } from "../assets/icons/Icons";

export const Footer = () => {
  return (
    <footer
      className="mt-10 grid h-[50rem]
     content-center items-center justify-center justify-items-center 
     bg-[#1B1B1B] pb-4 text-white 
      md:-z-40 md:h-[30rem]  md:w-full md:grid-cols-[25em_25em_25em] md:pl-12 md:pr-12"
    >
      {/*Logo Image */}
      <div
        className=" mt-8 mb-8 h-[8em] w-full
         bg-contain bg-center bg-no-repeat 
         md:m-0 md:h-3/4 md:w-full"
        style={{ backgroundImage: `url(${SPLogoTrans})` }}
      ></div>

      {/*DIV for contact Info */}
      <div className="flex w-full flex-col pt-10  text-left ">
        <p className="mb-5 text-xl">
          <b>Contact</b>
        </p>
        <p>
          <b>Téléphone:</b> +41 77 123 45 67
        </p>
        <p>
          <b>Email:</b> <span className="text-[#F5C443]">saveur@pepe.ch</span>
        </p>

        {/* Instagram Icon */}
        <div className=" mt-8 md:text-left">
          <a href="https://www.instagram.com/saveurpepe/">
            <button className=" rounded-lg p-1">
              <InstaIcon className=" fill-white hover:fill-[#F5C443]" />
            </button>
          </a>
        </div>
      </div>

      {/* Separation line */}
      <p className="text-gray-600 md:hidden">
        {" "}
        ____________________________________
      </p>

      {/*Quick Links */}
      <div className="w-full">
        <p className="mb-3 pt-5 text-left text-xl">
          <b>Liens utiles</b>
        </p>

        <p className="pt-1 text-left text-gray-400">Home</p>
        <p className="pt-1 text-left text-gray-400">Menu</p>
        <p className="pt-1 text-left text-gray-400">Shop</p>
        <p className="pt-1 text-left text-gray-400">About</p>
      </div>
    </footer>
  );
};

export default Footer;
