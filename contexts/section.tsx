import { ISectionContext } from "@/types/contexts";
import { ReactNode, createContext, useState } from "react";

export const SectionContext = createContext<ISectionContext | null>(null);

const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [actualSection, setActualSection] = useState<string | null>(null);
  return (
    <SectionContext.Provider value={{ actualSection, setActualSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
