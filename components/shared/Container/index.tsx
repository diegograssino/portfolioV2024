import { IContainerProps } from "@/types/shared";

const Container = ({
  children,
  as: Tag = "div",
  ...otherProps
}: IContainerProps) => {
  return (
    <Tag>
      <div className="max-w-[1280px] mx-auto px-5" {...otherProps}>
        {children}
      </div>
    </Tag>
  );
};

export default Container;
