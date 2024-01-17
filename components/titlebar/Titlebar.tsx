import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";

const Titlebar = () => {
  return (
    <Perspective3d className="w-full h-[5%] bg-[#2F2F2F] rounded flex items-center justify-between p-4 pointer-events-none">
      <Perspective3d className="flex gap-2 ">
        <div className="w-3 h-3 rounded-full bg-[#F75745]" />
        <div className="w-3 h-3 rounded-full bg-[#FAB93B]" />
        <div className="w-3 h-3 rounded-full bg-[#44B041]" />
      </Perspective3d>
    </Perspective3d>
  );
};

export default Titlebar;
