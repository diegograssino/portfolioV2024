import { Dispatch, SetStateAction } from "react";

export interface ISectionContext {
  actualSection: string | null;
  setActualSection: Dispatch<SetStateAction<string | null>>;
}
