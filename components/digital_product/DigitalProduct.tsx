import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";

const DigitalProduct = () => {
  return (
    <Perspective3d
      className={`bottom-10 absolute text-2xl text-center text-white left-[calc(24rem+4rem)] w-80 p-4 h-60 bg-[#0008D3] grid place-content-center rounded-md transition-all ${englebert.className}`}
    >
      <div className="w-3 h-3 top-1 left-1 rounded-full bg-black absolute"></div>
      <div className="w-3 h-3 top-1 right-1 rounded-full bg-black absolute "></div>
      <Perspective3d>
        <p>
          I combine design, technology, and strategy to create tailored digital
          solutions that dirves rapid, sustainable growth for your brand
        </p>
      </Perspective3d>
    </Perspective3d>
  );
};

export default DigitalProduct;
