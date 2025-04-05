"use client";
import { animations } from "@/utils/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../Container";
import ToggleTheme from "../ToggleTheme";

const Navbar = () => {
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

  function scrollToTop() {
    const isBrowser = () => typeof window !== "undefined";
    if (isBrowser()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header
      className={`text-white py-2 sticky top-0 z-30 transition ease-in-out duration-700 ${
        scrolling
          ? "bg-secondary-lighter/90 dark:bg-secondary-darker/80"
          : "bg-transparent"
      }`}
    >
      <Container>
        <motion.div
          variants={animations.fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-between"
        >
          <div
            className="flex self-center flex-row gap-1 z-20 cursor-pointer"
            onClick={scrollToTop}
          >
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
          </div>
          <AnimatePresence>
            {scrolling ? (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ y: { velocity: 100 }, duration: 0.2 }}
                className="flex justify-end gap-8 md:gap-4"
              >
                {/* TODO Add multi language toogler */}
                {/* TODO Create Contact form */}
                {/* <Link
                  href={"/#contact"}
                  className="flex items-center gap-1 transition duration-300 ease-in-out hover:opacity-80"
                >
                  <IconMail />
                  <span className="hidden md:block mb-[2px]">Contact Me</span>
                </Link> */}
                <ToggleTheme />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Container>
    </header>
  );
};

export default Navbar;
