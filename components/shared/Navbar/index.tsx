"use client";
import { sections } from "@/content/sections";
import { SectionContext } from "@/contexts/section";
import { animations } from "@/utils/animations";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Container from "../Container";
import ToggleTheme from "../ToggleTheme";

const Navbar = () => {
  const { inViewSection, setInViewSection } = useContext(SectionContext)!;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
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

  function handleMenuVisibility(visibility: boolean): void {
    setIsMenuVisible(visibility);
  }
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setInViewSection("");
  }

  return (
    <nav
      className={`text-white py-2 sticky top-0 z-30 transition ease-in-out duration-700 ${
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
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3"
        >
          <div
            className="flex self-center flex-row gap-1 z-20 cursor-pointer"
            onClick={scrollToTop}
          >
            {!isMenuVisible ? (
              <>
                <span className="font-code text-xs lg:text-base text-tertiary-lighter sm:text-white">{`<`}</span>
                <span
                  className={`hidden sm:block font-code text-xs lg:text-base font-bold transition ease-in-out duration-700 ${
                    scrolling
                      ? "text-tertiary-darker dark:text-tertiary-lighter"
                      : "text-white"
                  }`}
                >{`MyPortfolio`}</span>
                <span className="font-code text-xs lg:text-base text-tertiary-lighter sm:text-white">{` />`}</span>
              </>
            ) : null}
          </div>
          {/* TODO refactor navbar to show only desktop or mobile version, not using display none */}
          <div className="hidden md:block">
            <ul className="flex justify-center gap-7">
              {sections.map((section, i) => (
                <li key={i}>
                  <Link
                    href={`#${section.slug}`}
                    className={`duration-100 ease-in-out hover:text-tertiary-lighter hover:dark:border-b-tertiary-darker ${
                      // TODO Debounce change of style to wait the animations
                      inViewSection === section.slug
                        ? "border-b-2 border-b-tertiary-lighter dark:border-b-tertiary-darker"
                        : ""
                    }`}
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end gap-5">
            {/* TODO Add multi language toogler */}
            <ToggleTheme isVisible={scrolling && !isMenuVisible} />
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
            <Container as="ul" className="flex flex-col gap-3 pl-3">
              {sections.map((section, i) => (
                <li key={i} className="flex gap-2">
                  <IconArrowRight
                    className="self-center ml-1 text-tertiary"
                    size={32}
                  />
                  <Link
                    href={`#${section.slug}`}
                    className="text-[2rem] md:hover:font-bold"
                    onClick={() => handleMenuVisibility(false)}
                  >
                    {section.name}
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
