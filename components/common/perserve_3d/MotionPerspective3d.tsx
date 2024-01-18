import React from "react";
import { motion } from "framer-motion";

const MotionPerspective3d = ({
  children,
  className,
  translatez = 75,
  onClick,
  animate,
  initial,
  transition,
}: {
  children?: React.ReactNode;
  className?: string;
  translatez?: number;
  onClick?: () => void;
  animate?: {};
  initial?: {};
  transition?: {};
}) => {
  return (
    <motion.div
      animate={animate}
      initial={initial}
      transition={{ ...transition, ease: "linear" }}
      style={{
        transform: `translateZ(${translatez}px)`,
        transformStyle: "preserve-3d",
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default MotionPerspective3d;
