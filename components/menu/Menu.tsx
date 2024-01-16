import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";

const brands = ["Home", "Projects", "Contact"];

const Menu = () => {
  return (
    <Perspective3d
      translatez={100}
      className={`top-16 absolute text-xl text-center text-white left-[62rem] w-40 p-4 h-[32rem] bg-[#A25A2F] grid place-content-center gap-4 rounded-md transition-all ${englebert.className}`}
    >
      <div className="w-3 h-3 top-1 left-1 rounded-full bg-black absolute"></div>
      <div className="w-3 h-3 top-1 right-1 rounded-full bg-black absolute "></div>
      <div className="w-3 h-3 bottom-1 left-1 rounded-full bg-black absolute"></div>
      <div className="w-3 h-3 bottom-1 right-1 rounded-full bg-black absolute "></div>
      <Perspective3d translatez={50}>Menu</Perspective3d>
      {brands.map((item, i) => {
        return (
          <Perspective3d
            key={`${item}-${i}`}
            className="w-28 h-28 rounded-2xl bg-[#1F1F1E] grid place-content-center shadow-2xl cursor-pointer"
          >
            {item}
          </Perspective3d>
        );
      })}
    </Perspective3d>
  );
};

export default Menu;
