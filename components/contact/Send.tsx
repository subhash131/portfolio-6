"use client";
import React from "react";
import MotionPerspective3d from "../common/perserve_3d/MotionPerspective3d";
import { englebert } from "@/fonts";
import Perspective3d from "../common/perserve_3d/Perspective3d";

const Send = () => {
  return (
    <MotionPerspective3d
      initial={{
        height: "0%",
        visibility: "hidden",
        skewX: 0,
      }}
      animate={{
        height: "70%",
        visibility: "visible",
        skewX: 1,
      }}
      translatez={0}
      transition={{ duration: 0.3, delay: 1 }}
      className={` absolute text-2xl text-center bg-[#fff] text-gray-700 left-[73%] p-4 w-[20%] rounded-md transition-all flex bottom-[10%] gap-10 flex-col ${englebert.className} justify-center`}
      onClick={() => {
        console.log("send");
      }}
    >
      <Perspective3d className="pointer-events-none">Send</Perspective3d>
    </MotionPerspective3d>
  );
};

export default Send;
