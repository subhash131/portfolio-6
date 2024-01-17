import React from "react";
import { createContext } from "vm";

export const Context = createContext(undefined);

const StateContext = ({ children }: { children: React.ReactNode }) => {
  return <Context>{children}</Context>;
};

export default StateContext;
