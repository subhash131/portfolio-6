import React from "react";
import MotionPerspective3d from "../common/perserve_3d/MotionPerspective3d";
import Image from "next/image";

const ImageContainer = ({
  image,
  className,
  maxHeight,
}: {
  image: string;
  className: string;
  maxHeight: number;
}) => {
  return (
    <MotionPerspective3d
      initial={{ height: 0 }}
      animate={{ height: maxHeight }}
      transition={{ delay: 1 }}
      className={`absolute ${className}`}
    >
      <Image
        src={image}
        width={100}
        height={100}
        alt="project 1"
        className="w-full h-full object-cover"
      />
    </MotionPerspective3d>
  );
};

export default ImageContainer;
