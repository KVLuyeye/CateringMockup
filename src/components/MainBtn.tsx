import React from "react";

export const MainBtn = (props: any) => {
  return (
    <button
      className=" h-12 rounded-md border border-transparent
      bg-green-800 p-2 text-white
      transition delay-100 ease-in-out 
      hover:border-green-800 hover:bg-white hover:text-green-800"
    >
      {props.value}
    </button>
  );
};
