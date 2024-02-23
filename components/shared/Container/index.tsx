import { IContainerProps } from "@/types/shared";

const Container = ({
  children,
  as: Tag = "div",
  ...otherProps
}: IContainerProps) => {
  return (
    <Tag {...otherProps}>
      <div className="max-w-[1280px] mx-auto px-5">{children}</div>
    </Tag>
  );
};

export default Container;
