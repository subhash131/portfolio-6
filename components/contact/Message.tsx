"use client";
import React from "react";
import MotionPerspective3d from "../common/perserve_3d/MotionPerspective3d";
import { englebert } from "@/fonts";

const Message = () => {
  return (
    <MotionPerspective3d
      initial={{
        height: "0%",
        visibility: "hidden",
        skew: 0,
      }}
      animate={{
        height: "60%",
        visibility: "visible",
        skewY: 1,
      }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={` bottom-12 absolute text-2xl text-center bg-white  left-[5%] p-4 w-[65%] rounded-md transition-all flex gap-10 flex-col ${englebert.className} pointer-events-none`}
    >
      <textarea
        style={{
          transformStyle: "preserve-3d",
        }}
        placeholder="Type message..."
        className="pointer-events-auto border-b ring-0 outline-none  w-full h-full resize-none"
      />
    </MotionPerspective3d>
  );
};

export default Message;
