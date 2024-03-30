"use client";
import { SectionContext } from "@/contexts/section";
import { ISectionDetecterWrapper } from "@/types/shared";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

const SectionDetecterWrapper = ({
  children,
  section,
}: ISectionDetecterWrapper) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const { actualSection, setActualSection } = useContext(SectionContext)!;

  useEffect(() => {
    if (isInView && actualSection !== section) {
      setActualSection(section);
    }
  }, [isInView]);
  return <div ref={ref}>{children}</div>;
};

export default SectionDetecterWrapper;
