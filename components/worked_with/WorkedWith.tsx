import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";

const brands = ["PwC", "Victoria's Secret", "Aon", "CVS"];

const WorkedWith = () => {
  return (
    <Perspective3d
      translatez={100}
      className={`top-16 absolute text-xl text-center text-white left-[calc(50rem)] w-40 p-4 h-[32rem] bg-[#A7916D] grid place-content-center rounded-md transition-all ${englebert.className}`}
    >
      <div className="w-3 h-3 top-1 left-1 rounded-full bg-black absolute"></div>
      <div className="w-3 h-3 top-1 right-1 rounded-full bg-black absolute "></div>
      <div className="w-3 h-3 bottom-1 left-1 rounded-full bg-black absolute"></div>
      <div className="w-3 h-3 bottom-1 right-1 rounded-full bg-black absolute "></div>
      <Perspective3d translatez={50}>Worked with amazing brands</Perspective3d>
      {brands.map((item, i) => {
        return (
          <Perspective3d
            key={`${item}-${i}`}
            className="w-28 h-28 rounded-full bg-black grid place-content-center shadow-2xl"
          >
            {item}
          </Perspective3d>
        );
      })}
    </Perspective3d>
  );
};

export default WorkedWith;
