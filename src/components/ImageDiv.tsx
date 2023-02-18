import React from "react";
import { motion } from "framer-motion";

export const ImageDiv = (props: any) => {
  return (
    <motion.div
      className="mt-12 h-[20em] w-full
          rounded 
          bg-cover bg-center bg-no-repeat shadow-xl
          lg:h-[33em] lg:w-[100%]"
      initial={{ translateX: 250, opacity: 0.25 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ backgroundImage: `url(${props.url})` }}
    ></motion.div>
  );
};
