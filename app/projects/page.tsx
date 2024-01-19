import Perspective3d from "@/components/common/perserve_3d/Perspective3d";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <Perspective3d>
      <Image
        src="/assets/project1.png"
        width={100}
        height={100}
        alt="project 1"
      />
    </Perspective3d>
  );
};

export default Projects;
