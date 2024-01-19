"use client";
import MotionPerspective3d from "@/components/common/perserve_3d/MotionPerspective3d";
import Perspective3d from "@/components/common/perserve_3d/Perspective3d";
import ImageContainer from "@/components/projects/ImageContainer";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <Perspective3d className="bg--100 w-[80%] h-[90%] relative pointer-events-none">
      <ImageContainer
        className="absolute left-10 h-10 bg-red-100 top-10 w-96 rounded-lg overflow-hidden"
        image="/assets/project1.png"
        maxHeight={200}
      />
    </Perspective3d>
  );
};

export default Projects;
