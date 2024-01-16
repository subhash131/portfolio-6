import React from "react";

const Perspective3d = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      style={{
        transform: "translateZ(75px)",
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Perspective3d;
