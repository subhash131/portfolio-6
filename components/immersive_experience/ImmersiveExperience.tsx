import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";

const ImmersiveExperience = () => {
  return (
    <Perspective3d
      className={`top-20 absolute text-xl text-center text-black left-[calc(24rem+5rem)] w-80 p-4 h-48 bg-[#C4BDA5] grid place-content-center rounded-md transition-all ${englebert.className}`}
    >
      <div className="w-3 h-3 top-1 left-1 rounded-full bg-black absolute"></div>
      <div className="w-3 h-3 top-1 right-1 rounded-full bg-black absolute "></div>
      <Perspective3d translatez={40}>
        For any digital product, a seemless and enhanced user experience(UX) is
        crucial, accompained by an emotionally engaging and immersive user
        interface(UI)
      </Perspective3d>
    </Perspective3d>
  );
};

export default ImmersiveExperience;
