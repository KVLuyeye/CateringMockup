import React from "react";
import HeroImage from "../assets/pics/SP_Logo.jpg";
import { motion } from "framer-motion";

export const Hero = (props: any) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div
        className="h-80
         bg-hero-pattern bg-contain bg-center bg-no-repeat
         md:h-[35rem] lg:bg-[#191919] lg:bg-none "
        style={{ height: props.height }}
      >
        {/* backgroundImage: `url(${props.image})` */}
      </div>
    </motion.section>
  );
};
