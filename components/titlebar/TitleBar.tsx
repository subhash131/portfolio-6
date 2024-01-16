import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";

const Navbar = () => {
  return (
    <Perspective3d className="w-full h-10 bg-[#2F2F2F] rounded flex items-center justify-between p-4">
      <Perspective3d className="flex gap-2 ">
        <div className="w-3 h-3 rounded-full bg-[#666666]" />
        <div className="w-3 h-3 rounded-full bg-[#666666]" />
        <div className="w-3 h-3 rounded-full bg-[#666666]" />
      </Perspective3d>
    </Perspective3d>
  );
};

export default Navbar;
