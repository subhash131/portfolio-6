import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { Englebert } from "next/font/google";

const englebert = Englebert({
  weight: ["400"],
  subsets: ["latin"],
});

const WebDeveloper = () => {
  return (
    <Perspective3d
      className={`bottom-4 absolute text-3xl text-center text-white left-4 w-96 h-64 bg-[#7B896B] grid place-content-center rounded-md ${englebert.className} transition-all`}
    >
      <Perspective3d className="w-32 h-32 rounded-full bg-black">
        <Perspective3d className="-ml-28 -mt-1 w-auto">
          Web Developer
        </Perspective3d>
        <Perspective3d className="ml-6 mt-10  w-52 text-sm">
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </Perspective3d>
      </Perspective3d>
    </Perspective3d>
  );
};

export default WebDeveloper;
