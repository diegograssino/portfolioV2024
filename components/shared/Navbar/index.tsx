"use client";
import { options } from "@/content/shared/navbar/navbar";
import {
  IconCircleFilled,
  IconDeviceFloppy,
  IconMenu2,
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
      className="bg-secondary text-white py-1 sticky top-0"
      onMouseLeave={() => handleMenu(false)}
    >
      <div className="z-10">
        <Container>
          <div className="flex justify-between">
            <div>
              <IconDeviceFloppy
                className="flex self-center text-tertiary"
                size={"1.5rem"}
              />
            </div>
            <div className="w-2/3 border-2 border-white">asdasd</div>
            <div className="flex gap-4">
              <ToggleTheme />
              <button className="">
                {!isMenuVisible ? (
                  <IconMenu2
                    className="flex self-center"
                    size={"1.875rem"}
                    onClick={() => handleMenu(!isMenuVisible)}
                  />
                ) : (
                  <IconX
                    className="flex self-center"
                    size={"1.875rem"}
                    onClick={() => handleMenu(!isMenuVisible)}
                  />
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="">
        <AnimatePresence>
          {isMenuVisible ? (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ y: { velocity: 100 }, duration: 0.2 }}
              className={`absolute w-full bg-secondary pt-4 pb-8 z-0`}
            >
              <Container>
                <ul>
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
                </ul>
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
