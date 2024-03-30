"use client";
import Container from "@/components/shared/Container";
import Emoji from "@/components/shared/Emoji";
import { animations } from "@/utils/animations";
import { IconArrowDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedContent = () => {
  return (
    <div className="relative flex flex-col gap-6 justify-center items-center h-full">
      <Container className="flex flex-col gap-6 justify-center items-center h-full">
        <h1 className="flex flex-col gap-6 md:gap-10 xl:gap-2 pb-[40%] sm:pb-[30%] md:pb-[20%] lg:pb-[10%] z-20">
          <motion.div
            className="text-white text-4xl sm:text-6xl md:text-7xl"
            variants={animations.fadeIn}
            transition={{ duration: 0.25 }}
            initial="initial"
            animate="animate"
          >
            <span>{`I'm Diego `}</span>
            <Emoji symbol="👋" />
          </motion.div>
          <div className="flex flex-col xl:flex-row xl:gap-6 text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-tertiary-darker dark:text-tertiary">
            <motion.span
              variants={animations.fadeInFromLeft}
              transition={{ duration: 0.25, delay: 0.15 }}
              initial="initial"
              animate="animate"
            >
              Fullstack
            </motion.span>
            <motion.span
              variants={animations.fadeInFromRight}
              transition={{ duration: 0.25, delay: 0.2 }}
              initial="initial"
              animate="animate"
            >
              Developer
            </motion.span>
          </div>
        </h1>
      </Container>
      <motion.div
        className="absolute flex flex-col items-center justify-end pb-10 h-full z-20"
        variants={animations.fadeIn}
        transition={{ duration: 0.7, delay: 0.75 }}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={animations.rebound}
          transition={{ repeat: Infinity, duration: 2 }}
          initial="initial"
          animate="animate"
          className="rounded-full border-white border-2 p-2 text-2xl font-bold"
        >
          <Link href="#about">
            <IconArrowDown color="white" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedContent;
