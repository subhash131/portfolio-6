"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import styles from "./background.module.css";
import Perspective3d from "../../common/perserve_3d/Perspective3d";
import { useStateContext } from "@/context/StateContext";

const Background = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { bgColor } = useStateContext();
  useEffect(() => {
    document.documentElement.style.setProperty("--bgcolor", bgColor);
  }, [bgColor]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={styles.container}
      initial={{ height: 0, width: 0, overflow: "hidden" }}
      animate={{ height: 650, width: 1250, overflow: "visible" }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={`absolute inset-4 rounded-md shadow-lg ${className} p-2  ${styles.bg}`}
      >
        {children}
        <Perspective3d className="top-28 left-20 absolute text-white text-4xl select-none">
          Code by Subhash nayak
        </Perspective3d>
      </div>
    </motion.div>
  );
};

export default Background;
