"use client";
import React from "react";
import MotionPerspective3d from "../common/perserve_3d/MotionPerspective3d";

const Email = () => {
  return (
    <MotionPerspective3d
      initial={{
        opacity: 0,
        skewY: 0,
      }}
      animate={{
        opacity: 1,
        skewY: -1,
      }}
      translatez={60}
      transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
      className={` absolute text-2xl top-28 h-[10%] text-center bg-white left-[5%] p-4 w-[65%] rounded-md transition-all flex gap-10 flex-col `}
    >
      <input
        style={{
          transformStyle: "preserve-3d",
        }}
        type="email"
        required
        placeholder="Drop your email..."
        className="pointer-events-auto border-b ring-0 outline-none  w-full h-10 resize-none"
      />
    </MotionPerspective3d>
  );
};

export default Email;
