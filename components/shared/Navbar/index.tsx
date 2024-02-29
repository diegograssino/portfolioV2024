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

  function handleMenuVisibility(visibility: boolean): void {
    setIsMenuVisible(visibility);
  }

  return (
    <nav
      className="bg-secondary-lighter dark:bg-secondary-darker text-white pt-1 pb-2 sticky top-0 z-10 rounded-bl-full"
      onMouseLeave={() => handleMenuVisibility(false)}
    >
      <Container>
        <div className="flex justify-between">
          <div className="flex flex-row gap-1">
            <IconDeviceFloppy
              className="flex self-center text-white opacity-75 z-20"
              size={"1.5rem"}
            />
            <span className="font-code">diegoGrassino</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex justify-center gap-5">
              {options.map((option, i) => (
                <li key={i}>
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
            <button className="z-20">
              <IconSearch
                className="flex self-center dark:opacity-75 hover:opacity-75 transition duration-200 ease-in-out"
                size={"1.2rem"}
              />
            </button>
            <ToggleTheme />
            <button className="md:hidden z-20">
              {!isMenuVisible ? (
                <IconMenu2
                  className="flex self-center opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
                  size={"1.875rem"}
                  onClick={() => handleMenuVisibility(!isMenuVisible)}
                />
              ) : (
                <IconX
                  className="flex self-center opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
                  size={"1.875rem"}
                  onClick={() => handleMenuVisibility(!isMenuVisible)}
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
            className={`absolute inset-y-0 right-0 w-full h-screen md:h-auto bg-secondary pt-16 pb-8 z-0 md:hidden`}
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
                    onClick={() => handleMenuVisibility(false)}
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
