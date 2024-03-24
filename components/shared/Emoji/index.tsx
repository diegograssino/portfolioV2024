import { IEmojiProps } from "@/types/shared";

const Emoji = ({ label = "", symbol }: IEmojiProps) => {
  return (
    <span
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
