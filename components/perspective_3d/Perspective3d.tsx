import React from "react";

const Perspective3d = ({
  children,
  className,
  translatez = 75,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  translatez?: number;
  onClick?: () => void;
}) => {
  return (
    <div
      style={{
        transform: `translateZ(${translatez}px)`,
        transformStyle: "preserve-3d",
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Perspective3d;
