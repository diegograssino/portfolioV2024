import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

export interface EmojiProps {
  symbol: string;
  label?: string;
}

export interface SpinnerProps {
  dots?: number;
  size?: "xsmall" | "small" | "default" | "large";
  speed?: "slow" | "default" | "fast";
  hasDarkBackground?: boolean;
}

export interface SectionDetecterProps {
  children: ReactNode;
  section: string;
}
