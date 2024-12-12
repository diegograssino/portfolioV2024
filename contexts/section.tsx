import { SectionContextProps } from "@/types/contexts";
import { ReactNode, createContext, useState } from "react";

export const SectionContext = createContext<SectionContextProps | null>(null);

const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [inViewSection, setInViewSection] = useState<string | null>(null);
  return (
    <SectionContext.Provider
      value={{
        inViewSection,
        setInViewSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
