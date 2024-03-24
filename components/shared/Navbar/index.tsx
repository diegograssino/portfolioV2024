"use client";
import { sections } from "@/content/sections";
import { animations } from "@/utils/animations";
import { IconCircleFilled, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../Container";
import ToggleTheme from "../ToggleTheme";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  function handleMenuVisibility(visibility: boolean): void {
    setIsMenuVisible(visibility);
  }

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleScroll(): void {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  const searchParams = useSearchParams();
  useEffect(() => {
    console.log(searchParams.get("section"));
  }, [searchParams]);

  return (
    <nav
      className={`text-white py-2 sticky top-0 h-[2.5rem] z-30 transition ease-in-out duration-700 ${
        scrolling
          ? "bg-secondary-lighter dark:bg-secondary-darker"
          : "bg-transparent"
      }`}
      onMouseLeave={() => handleMenuVisibility(false)}
    >
      <Container>
        <motion.div
          variants={animations.fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.15, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3"
        >
          <div className="flex self-center flex-row gap-1 z-20">
            <span className="font-code text-xs lg:text-base text-tertiary-lighter sm:text-white">{`<`}</span>
            <span
              className={`hidden sm:block font-code text-xs lg:text-base font-bold transition ease-in-out duration-700 ${
                scrolling
                  ? "text-tertiary-darker dark:text-tertiary-lighter"
                  : "text-secondary-lighter"
              }`}
            >{`DiegoGrassino`}</span>
            <span className="font-code text-xs lg:text-base text-tertiary-lighter sm:text-white">{` />`}</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex justify-center gap-7">
              {sections.map((section, i) => (
                <li key={i}>
                  <Link
                    href={section.url}
                    className={`duration-200 ease-in-out hover:text-tertiary-lighter hover:dark:border-b-tertiary-darker ${
                      searchParams.get("section") === section.slug
                        ? "duration-100 ease-in-out border-b-2 border-b-tertiary-lighter dark:border-b-tertiary-darker"
                        : ""
                    }`}
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end gap-3 md:gap-5">
            {/* TODO Add multi language toogler */}
            {/* <button className="z-20">
              <IconSearch
                className="flex self-center dark:opacity-75 hover:opacity-75 transition duration-200 ease-in-out"
                size={"1.2rem"}
              />
            </button> */}
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
        </motion.div>
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
              {sections.map((option, i) => (
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
