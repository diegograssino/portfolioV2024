"use client";
import { SectionContext } from "@/contexts/section";
import { SectionDetecterProps } from "@/types/shared";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

const SectionDetecter = ({ children, section }: SectionDetecterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const { inViewSection, setInViewSection } = useContext(SectionContext)!;

  useEffect(() => {
    if (isInView && inViewSection !== section) {
      setInViewSection(section);
    }
  }, [isInView]);

  return <div ref={ref}>{children}</div>;
};

export default SectionDetecter;
