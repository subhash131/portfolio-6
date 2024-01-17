"use client";
import React, { useEffect, useState } from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";
import MotionPerspective3d from "../perspective_3d/MotionPerspective3d";

const WebDeveloper = () => {
  useEffect(() => {}, []);

  return (
    <MotionPerspective3d
      initial={{ height: 0, overflow: "hidden", fontSize: "0rem", bottom: 500 }}
      animate={{
        height: "55%",
        overflow: "visible",
        fontSize: "1.875rem",
        bottom: 20,
      }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`bottom-[5%] absolute text-3xl text-center text-white left-[5%] h-[55%] w-[30%]  bg-[#7B896B] grid place-content-center rounded-md ${englebert.className} transition-all`}
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
        transition={{ duration: 0.4, delay: 0.9 }}
        className="rounded-full bg-black"
      >
        <Perspective3d className="-ml-28  w-auto">Web Developer</Perspective3d>
        <Perspective3d translatez={30} className="ml-12 mt-28 w-52 text-sm">
          The combination of my passion for design, code & interaction,
          positions me in a unique place in the web design world.
        </Perspective3d>
      </MotionPerspective3d>
    </MotionPerspective3d>
  );
};

export default WebDeveloper;
