"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  function handleTheme(): void {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    !mounted && setMounted(true);
  }, []);

  return (
    <div className="flex gap-1 z-20">
      {mounted ? (
        <button
          className="self-center w-10 h-6 rounded-full px-[2px] py-[2px] border-2 border-white border-opacity-50 transition duration-300 ease-in-out bg-secondary/80 hover:bg-secondary-lighter/90 dark:hover:bg-secondary-darker/80 active:bg-secondary-darker/80 dark:active:bg-secondary-lighter/90"
          onClick={handleTheme}
        >
          <div
            className={`flex gap-x-4 px-[2px] ${
              resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
          >
            <motion.span layout>
              {resolvedTheme === "dark" ? (
                <IconMoon className="dark:opacity-75" size={16} />
              ) : (
                <IconSun className="dark:opacity-75" size={16} />
              )}
            </motion.span>
          </div>
        </button>
      ) : (
        <div className="flex justify-center w-10 h-6 rounded-full px-[2px] py-[2px] animate-pulse bg-white opacity-50" />
      )}
    </div>
  );
};

export default ToggleTheme;
