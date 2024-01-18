"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const StateContext = createContext<any>(null);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<
    "projects" | "contact" | "home"
  >("home");
  const [bgColor, setBgColor] = useState<"#1C1023" | "#111A0B" | "#092A34">(
    "#111A0B"
  );
  const getPageColor = () => {
    switch (currentPage) {
      case "home":
        setBgColor("#111A0B");
        break;
      case "contact":
        setBgColor("#1C1023");
        break;
      case "projects":
        setBgColor("#092A34");
        break;
      default:
        setBgColor("#111A0B");
    }
  };
  useEffect(() => {
    getPageColor();
  }, [currentPage]);

  return (
    <StateContext.Provider value={{ currentPage, bgColor, setCurrentPage }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;

export const useStateContext = () => useContext(StateContext);
