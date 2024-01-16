import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../fonts";

const WebDeveloper = () => {
  return (
    <Perspective3d
      className={`bottom-10 absolute text-3xl text-center text-white left-10 w-96 h-80 bg-[#7B896B] grid place-content-center rounded-md ${englebert.className} transition-all`}
    >
      <Perspective3d className="w-52 h-52 rounded-full bg-black">
        <Perspective3d className="-ml-28 mt-10 w-auto">
          Web Developer
        </Perspective3d>
        <Perspective3d translatez={30} className="ml-12 mt-16 w-52 text-sm">
          The combination of my passion for design, code & interaction,
          positions me in a unique place in the web design world.
        </Perspective3d>
      </Perspective3d>
    </Perspective3d>
  );
};

export default WebDeveloper;
