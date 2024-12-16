import { ContainerProps } from "@/types/shared";

const Container = ({
  children,
  as: Tag = "div",
  ...otherProps
}: ContainerProps) => {
  return (
    <Tag className="w-full max-w-[1280px] mx-auto px-5" {...otherProps}>
      {children}
    </Tag>
  );
};

export default Container;
