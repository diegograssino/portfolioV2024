export interface IContainerProps {
  children?: React.ReactNode;
}

export interface IEmojiProps {
  symbol: string;
  label?: string;
}

export interface ISpinner {
  dots?: number;
  size?: "xsmall" | "small" | "default" | "large";
  isDark?: boolean;
}
