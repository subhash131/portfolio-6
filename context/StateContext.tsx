"use client";
import React, { createContext, useContext } from "react";

export const StateContext = createContext<null | { a: string }>(null);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StateContext.Provider value={{ a: "aaa" }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;

export const useStateContext = () => useContext(StateContext);
