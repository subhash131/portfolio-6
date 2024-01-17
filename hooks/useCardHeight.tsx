"use client";
import React, { useState } from "react";

const useCardHeight = (maxHeight: number): [number, () => void] => {
  const [height, setHeight] = useState(0);
  const toggleHeight = () => {
    setHeight((currentHeight) => {
      return currentHeight != maxHeight ? maxHeight : 0;
    });
  };
  return [height, toggleHeight];
};

export default useCardHeight;
