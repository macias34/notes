"use client";
import { createContext, FC, ReactNode, useState } from "react";
export const ThemeContext = createContext("dark");

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
