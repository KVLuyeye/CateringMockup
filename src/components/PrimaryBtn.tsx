import React from "react";

export const PrimaryBtn = (props: any) => {
  return (
    <button
      className=" pl-2 pr-2 border-solid border-2 rounded border-stone-900 hover:bg-yellow-400 "
      style={props.style}
    >
      {" "}
      {props.name}
    </button>
  );
};
