import { IContainer } from "@/types/shared";

const Container = ({ children = "" }: IContainer) => {
  return (
    <div className="flex">
      <div className="flex-none w-2 sm:w-4 md:w-8 lg:w-12 xl:flex-1"></div>
      <div className="flex-1 xl:w-[1280px] xl:flex-none">{children}</div>
      <div className="flex-none w-2 sm:w-4 md:w-8 lg:w-12 xl:flex-1"></div>
    </div>
  );
};

export default Container;
