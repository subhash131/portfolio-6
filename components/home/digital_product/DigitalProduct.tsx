"use client";
import React from "react";
import { Nail2 } from "../../common/nails/Nail";
import MotionPerspective3d from "../../common/perserve_3d/MotionPerspective3d";

const DigitalProduct = () => {
  return (
    <MotionPerspective3d
      initial={{
        height: 0,
        fontSize: "0rem",
        visibility: "hidden",
      }}
      animate={{
        height: "43%",
        fontSize: "1.5rem",
        visibility: "visible",
      }}
      transition={{ duration: 0.3, delay: 1.7 }}
      className={`bottom-[5%] absolute text-2xl text-center text-white left-[37%] p-4 w-[27%]   bg-[#0008D3] grid place-content-center rounded-md transition-all pointer-events-none`}
    >
      <Nail2 />
      <MotionPerspective3d
        initial={{ fontSize: "0rem" }}
        animate={{ fontSize: "1.5rem" }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <p>
          I combine design, technology, and strategy to create tailored digital
          solutions that dirves rapid, sustainable growth for your brand
        </p>
      </MotionPerspective3d>
    </MotionPerspective3d>
  );
};

export default DigitalProduct;
