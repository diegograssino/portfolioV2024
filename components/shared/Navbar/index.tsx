"use client";
import { options } from "@/content/shared/navbar/navbar";
import {
  IconCircleFilled,
  IconDeviceFloppy,
  IconMenu2,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Container from "../Container";
import ToggleTheme from "../ToggleTheme";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleMenu(visibility: boolean): void {
    setIsMenuVisible(visibility);
  }

  return (
    <nav
      className="bg-secondary-lighter dark:bg-secondary-darker text-white pt-1 pb-2 sticky top-0 z-10"
      onMouseLeave={() => handleMenu(false)}
    >
      <Container>
        <div className="flex justify-between">
          <IconDeviceFloppy
            className="flex self-center text-white opacity-75"
            size={"1.5rem"}
          />
          <div className="hidden md:block">
            <ul className="flex justify-center gap-5">
              {options.map((option, i) => (
                <li key={i} className="">
                  <Link
                    href={option.url}
                    className="bg-transparent rounded-full px-2 pb-1 dark:opacity-75 transition duration-200 ease-in-out hover:bg-secondary-darker dark:hover:bg-secondary hover:opacity-100"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 md:gap-5">
            <button>
              <IconSearch
                className="flex self-center dark:opacity-75 hover:opacity-75 transition duration-200 ease-in-out"
                size={"1.2rem"}
              />
            </button>
            <ToggleTheme />
            <button className="md:hidden">
              {!isMenuVisible ? (
                <IconMenu2
                  className="flex self-center opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
                  size={"1.875rem"}
                  onClick={() => handleMenu(!isMenuVisible)}
                />
              ) : (
                <IconX
                  className="flex self-center opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
                  size={"1.875rem"}
                  onClick={() => handleMenu(!isMenuVisible)}
                />
              )}
            </button>
          </div>
        </div>
      </Container>
      <AnimatePresence>
        {isMenuVisible ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ y: { velocity: 100 }, duration: 0.2 }}
            className={`absolute w-full h-96 md:h-auto bg-secondary pt-4 pb-8 z-0 md:hidden`}
          >
            <Container as="ul">
              {options.map((option, i) => (
                <li key={i} className="flex gap-2">
                  <IconCircleFilled
                    className="self-center ml-1 text-tertiary"
                    size={16}
                  />
                  <Link
                    href={option.url}
                    className="text-[1.5rem] hover:font-bold"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
