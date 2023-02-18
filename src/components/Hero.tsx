import React from "react";
import SPLogo from "../assets/pics/SP_Logo_Transparent.png";
import { motion } from "framer-motion";

export const Hero = (props: any) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div
        id="hero"
        style={{
          height: props.height,
          backgroundImage: `url(${props.image})`,
        }}
        className="flex h-80 
         bg-contain bg-center bg-no-repeat
         md:h-[30rem] lg:h-[50rem]  "
      >
        {/* backgroundImage: `url(${props.image})` */}
        <video
          src={props.video}
          className="relative -z-10 w-full object-fill brightness-[20%]"
          autoPlay
          playsInline
          muted
          loop
        ></video>

        <div
          className=" absolute top-[5%] left-[25%] z-40
          h-[10%] w-[50%] bg-contain bg-center bg-no-repeat
          text-red-600
          md:left-[33.25%] md:top-[15%] md:h-1/3 md:w-1/3 md:bg-contain"
          style={{ backgroundImage: `url(${SPLogo})` }}
        ></div>
      </div>
    </motion.section>
  );
};
