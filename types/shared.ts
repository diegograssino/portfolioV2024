import { ElementType, HTMLAttributes } from "react";

export interface IContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

export interface IEmojiProps {
  symbol: string;
  label?: string;
}

export interface ISpinner {
  dots?: number;
  size?: "xsmall" | "small" | "default" | "large";
  speed?: "slow" | "default" | "fast";
  hasDarkBackground?: boolean;
}
