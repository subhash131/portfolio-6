"use client";
import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../../fonts";
import Nail4 from "../nails/Nail";
import MotionPerspective3d from "../perspective_3d/MotionPerspective3d";

const brands = ["PwC", "Victoria's Secret", "Aon", "CVS"];
{
  /* <MotionPerspective3d
initial={{ height: 0, overflow: "hidden", fontSize: "0rem" }}
animate={{ height: "43%", overflow: "visible", fontSize: "1.5rem" }}
className={`bottom-[5%] absolute text-2xl text-center text-white left-[37%] p-4 w-[27%]  h-[43%] bg-[#0008D3] grid place-content-center rounded-md transition-all ${englebert.className} pointer-events-none`}
> */
}

const WorkedWith = () => {
  return (
    <MotionPerspective3d
      initial={{
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        fontSize: "0rem",
      }}
      animate={{
        height: "85%",
        overflow: "visible",
        visibility: "visible",
        fontSize: "1.5rem",
      }}
      transition={{ duration: 0.3, delay: 1 }}
      translatez={100}
      className={`top-[12%] absolute text-xl text-center text-white left-[67%] w-[13%] h-[85%] p-4 bg-[#A7916D] flex items-center flex-col justify-center rounded-md transition-all pointer-events-none ${englebert.className}`}
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
    </MotionPerspective3d>
  );
};

export default WorkedWith;
