"use client";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  useEffect(() => {
    const htmlTag = document.querySelector("html")!;
    htmlTag.className = theme;
  }, [theme]);

  return (
    <button
      type="button"
      className="fixed top-5 right-5 rounded-full bg-gray p-2 text-3xl text-primary dark:bg-yellow dark:text-primary"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
};

export default ThemeToggle;
