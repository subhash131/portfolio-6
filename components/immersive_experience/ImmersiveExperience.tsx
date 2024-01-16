import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";
import { Nail2 } from "../nails/Nail";

const ImmersiveExperience = () => {
  return (
    <Perspective3d
      className={`top-20 absolute text-xl text-center text-black left-[calc(24rem+4rem)] w-80 p-4 h-52 bg-[#C4BDA5] grid place-content-center rounded-md transition-all ${englebert.className}`}
    >
      <Nail2 />
      <Perspective3d translatez={50}>
        For any digital product, a seemless and enhanced user experience(UX) is
        crucial, accompained by an emotionally engaging and immersive user
        interface(UI)
      </Perspective3d>
    </Perspective3d>
  );
};

export default ImmersiveExperience;
