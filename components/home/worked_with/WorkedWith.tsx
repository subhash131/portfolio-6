"use client";
import React from "react";
import Perspective3d from "../../common/perserve_3d/Perspective3d";
import Nail4 from "../../common/nails/Nail";
import MotionPerspective3d from "../../common/perserve_3d/MotionPerspective3d";

const brands = ["PwC", "Victoria's Secret", "Aon", "CVS"];

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
      className={`top-[12%] absolute text-xl text-center text-white left-[67%] w-[13%] h-[85%] p-4 bg-[#A7916D] flex items-center flex-col justify-center rounded-md transition-all pointer-events-none`}
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
            <Perspective3d translatez={10}>{item}</Perspective3d>
          </Perspective3d>
        );
      })}
    </MotionPerspective3d>
  );
};

export default WorkedWith;
