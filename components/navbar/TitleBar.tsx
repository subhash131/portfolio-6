import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";

const Navbar = () => {
  return (
    <Perspective3d className="w-full h-10 bg-[#2F2F2F] rounded flex items-center p-4">
      <div className="flex gap-2">
        <Perspective3d
          translatez={25}
          className="w-3 h-3 rounded-full bg-[#F75745]"
        />
        <Perspective3d
          translatez={25}
          className="w-3 h-3 rounded-full bg-[#FAB93B]"
        />
        <Perspective3d
          translatez={25}
          className="w-3 h-3 rounded-full bg-[#44B041]"
        />
      </div>
    </Perspective3d>
  );
};

export default Navbar;
