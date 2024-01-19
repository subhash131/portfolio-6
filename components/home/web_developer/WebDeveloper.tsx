"use client";
import React from "react";
import Perspective3d from "../../common/perserve_3d/Perspective3d";
import MotionPerspective3d from "../../common/perserve_3d/MotionPerspective3d";

const WebDeveloper = () => {
  return (
    <MotionPerspective3d
      initial={{ height: 0, visibility: "hidden", fontSize: "0rem", bottom: 0 }}
      animate={{
        height: "60%",
        visibility: "visible",
        fontSize: "1.875rem",
        bottom: 30,
      }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`absolute text-3xl text-center text-white left-[4%] h-[55%] w-[30%]  bg-[#708765] grid place-content-center rounded-md transition-all`}
    >
      <MotionPerspective3d
        initial={{
          height: 0,
          width: 0,
          overflow: "hidden",
          fontSize: "0rem",
        }}
        animate={{
          height: 200,
          width: 200,
          overflow: "visible",
          fontSize: "1.875rem",
        }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="rounded-full bg-black"
      >
        <Perspective3d className="mt-2 -ml-10  w-auto">
          Web Developer
        </Perspective3d>
        <MotionPerspective3d
          translatez={30}
          className="ml-12 mt-20 w-52 text-sm"
          initial={{
            height: 0,
            fontSize: "0rem",
            top: "75%",
            visibility: "hidden",
          }}
          animate={{
            height: "35%",
            fontSize: "1rem",
            top: "12%",
            visibility: "visible",
          }}
          transition={{ duration: 1, delay: 2 }}
        >
          The combination of my passion for design, code & interaction,
          positions me in a unique place in the web development world.
        </MotionPerspective3d>
      </MotionPerspective3d>
    </MotionPerspective3d>
  );
};

export default WebDeveloper;
