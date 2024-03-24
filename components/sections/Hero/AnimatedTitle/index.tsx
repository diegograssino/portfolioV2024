"use client";
import Emoji from "@/components/shared/Emoji";
import { animations } from "@/utils/animations";
import { motion } from "framer-motion";

const AnimatedTitle = () => {
  return (
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
  );
};

export default AnimatedTitle;
