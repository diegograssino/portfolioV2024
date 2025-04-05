import { Dispatch, SetStateAction } from "react";

export interface SectionContextProps {
  inViewSection: string | null;
  setInViewSection: Dispatch<SetStateAction<string | null>>;
}
