"use client";
import React from "react";
import MotionPerspective3d from "../common/perserve_3d/MotionPerspective3d";
import Perspective3d from "../common/perserve_3d/Perspective3d";

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
      className={` bottom-12 absolute text-2xl text-center bg-white  left-[5%] p-4 w-[65%] rounded-md transition-all flex gap-10 flex-col pointer-events-none`}
    >
      <Perspective3d className="w-full h-full">
        <textarea
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(35px)",
          }}
          placeholder="Type message..."
          className="pointer-events-auto border-b ring-0 bg-transparent outline-none w-full h-full resize-none drop-shadow-md"
          autoFocus
        />
      </Perspective3d>
    </MotionPerspective3d>
  );
};

export default Message;
