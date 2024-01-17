"use client";
import React from "react";
import { ContextProvider } from "../StateContext";

const StateContextProvider = () => {
  return (
    <ContextProvider.Provider>StateContextProvider</ContextProvider.Provider>
  );
};

export default StateContextProvider;
