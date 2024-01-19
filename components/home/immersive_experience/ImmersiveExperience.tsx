"use client";
import React from "react";
import { Nail2 } from "../../common/nails/Nail";
import MotionPerspective3d from "../../common/perserve_3d/MotionPerspective3d";

const ImmersiveExperience = () => {
  return (
    <MotionPerspective3d
      initial={{
        height: 0,
        overflow: "hidden",
        fontSize: "0rem",
        top: "75%",
        visibility: "hidden",
      }}
      animate={{
        height: "35%",
        overflow: "visible",
        fontSize: "1.5rem",
        top: "12%",
        visibility: "visible",
      }}
      transition={{ duration: 0.3, delay: 1.4 }}
      className={`top-[12%] absolute text-xl text-center text-black left-[37%] p-4 w-[27%] h-[35%] bg-[#C4BDA5] grid place-content-center rounded-md transition-all pointer-events-none`}
    >
      <Nail2 />
      <MotionPerspective3d
        initial={{ fontSize: "0rem" }}
        animate={{ fontSize: "1.5rem" }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        For any digital product, a seemless and enhanced user experience(UX) is
        crucial, accompained by an emotionally engaging and immersive user
        interface(UI)
      </MotionPerspective3d>
    </MotionPerspective3d>
  );
};

export default ImmersiveExperience;
