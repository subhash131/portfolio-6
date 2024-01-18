"use client";
import Perspective3d from "@/components/common/perserve_3d/Perspective3d";
import DropMessage from "@/components/contact/Message";
import Email from "@/components/contact/Email";
import SendMessage from "@/components/contact/Send";
import React from "react";

const Contact = () => {
  return (
    <Perspective3d
      className="w-[85%] h-full flex justify-center items-center text-gray-600"
      translatez={10}
    >
      <Email />
      <DropMessage />
      <SendMessage />
    </Perspective3d>
  );
};

export default Contact;
