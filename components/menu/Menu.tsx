"use client";
import React from "react";
import Perspective3d from "../perspective_3d/Perspective3d";
import { englebert } from "../../fonts";
import Nail4 from "../nails/Nail";
import MotionPerspective3d from "../perspective_3d/MotionPerspective3d";
import Link from "next/link";

const brands = ["Home", "Projects", "Contact"];

const Menu = () => {
  return (
    <MotionPerspective3d
      initial={{ height: 0, overflow: "hidden", fontSize: "0rem" }}
      animate={{ height: "85%", overflow: "visible", fontSize: "1.5rem" }}
      translatez={100}
      transition={{ duration: 0.5 }}
      className={`bottom-[3%] absolute text-xl text-center text-white left-[83%] w-[13%] h-[85%] p-4 bg-[#a2652f] grid place-content-center gap-4 rounded-md transition-all pointer-events-none ${englebert.className}`}
    >
      <Nail4 />
      <Perspective3d translatez={50} className="text-black">
        Menu
      </Perspective3d>
      {brands.map((item, i) => {
        return <Item index={i} item={item} key={`${item}-${i}`} />;
      })}
    </MotionPerspective3d>
  );
};

export default Menu;

const Item = ({ item, index }: { item: string; index: number }) => {
  return (
    <Link href={`/${item.toLowerCase()}`}>
      <MotionPerspective3d
        initial={{
          height: 0,
          fontSize: "0rem",
        }}
        animate={{
          height: "7rem",
          fontSize: "1.5rem",
        }}
        transition={{ duration: 0.2, delay: 0.6 }}
        className="w-28 h-28 rounded-md bg-[#000] grid place-content-center shadow-2xl cursor-pointer hover:bg-[#4c4c4a] transition-all pointer-events-auto "
        onClick={() => {
          console.log("hi");
        }}
      >
        <Perspective3d>{item}</Perspective3d>
      </MotionPerspective3d>
    </Link>
  );
};
