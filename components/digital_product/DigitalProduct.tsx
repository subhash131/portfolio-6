import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";
import { Nail2 } from "../nails/Nail";

const DigitalProduct = () => {
  return (
    <Perspective3d
      className={`bottom-10 absolute text-2xl text-center text-white left-[calc(24rem+4rem)] w-80 p-4 h-60 bg-[#0008D3] grid place-content-center rounded-md transition-all ${englebert.className}`}
    >
      <Nail2 />
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
