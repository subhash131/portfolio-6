import React from "react";

const Perspective3d = ({
  children,
  className,
  translatez = 75,
}: {
  children?: React.ReactNode;
  className?: string;
  translatez?: number;
}) => {
  return (
    <div
      style={{
        transform: `translateZ(${translatez}px)`,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Perspective3d;
