import { EmojiProps } from "@/types/shared";

const Emoji = ({ label = "false", symbol }: EmojiProps) => {
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
