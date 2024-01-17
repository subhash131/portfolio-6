import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";
import Nail4 from "../nails/Nail";

const brands = ["PwC", "Victoria's Secret", "Aon", "CVS"];

const WorkedWith = () => {
  return (
    <Perspective3d
      translatez={100}
      className={`top-[12%] absolute text-xl text-center text-white left-[67%] w-[13%] h-[85%] p-4 bg-[#A7916D] flex items-center flex-col justify-center rounded-md transition-all ${englebert.className}`}
    >
      <Nail4 />
      <Perspective3d translatez={50} className="text-black">
        Worked with amazing brands
      </Perspective3d>
      {brands.map((item, i) => {
        return (
          <Perspective3d
            key={`${item}-${i}`}
            className="w-[85%] h-[100%] rounded-full bg-black flex items-center justify-center shadow-2xl pointer-events-none"
          >
            <Perspective3d>{item}</Perspective3d>
          </Perspective3d>
        );
      })}
    </Perspective3d>
  );
};

export default WorkedWith;
