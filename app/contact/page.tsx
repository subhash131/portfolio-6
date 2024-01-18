"use client";
import MotionPerspective3d from "@/components/common/perserve_3d/MotionPerspective3d";
import Perspective3d from "@/components/common/perserve_3d/Perspective3d";
import { englebert } from "@/fonts";
import React from "react";

const Contact = () => {
  return (
    <Perspective3d
      className="w-[80%] h-full flex justify-center items-center"
      translatez={0}
    >
      <MotionPerspective3d
        initial={{
          height: 0,
          fontSize: "0rem",
          visibility: "hidden",
        }}
        animate={{
          height: "80%",
          fontSize: "1.5rem",
          visibility: "visible",
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className={` absolute text-2xl text-center bg-white text-white left-[2%] p-4 w-[75%] grid place-content-center rounded-md transition-all ${englebert.className} pointer-events-none`}
      ></MotionPerspective3d>
    </Perspective3d>
  );
};

export default Contact;
