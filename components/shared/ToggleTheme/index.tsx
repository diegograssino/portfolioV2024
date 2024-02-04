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
    <div className="flex gap-1">
      {/* TODO ADD OPTIONAL TEXT LABEL */}
      {/* <span className="hidden md:block self-center pb-[1px] text-md opacity-75">
        Theme
      </span> */}
      <button
        className="self-center w-10 h-6 border-2 border-white border-opacity-50 rounded-full px-[2px] py-[2px] transition-all bg-secondary-darker active:bg-secondary-lighter"
        onClick={handleTheme}
      >
        {mounted ? (
          <div
            className={`flex gap-x-4 px-[2px] ${
              resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
          >
            <motion.span layout>
              {resolvedTheme === "dark" ? (
                <IconMoon className="opacity-75" size={16} />
              ) : (
                <IconSun className="opacity-75" size={16} />
              )}
            </motion.span>
          </div>
        ) : null}
      </button>
    </div>
  );
};

export default ToggleTheme;
