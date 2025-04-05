import { IHero } from "@/types/sections";
import Image from "next/image";
import starfield from "../../../public/assets/hero/starfield.gif";

const Hero = ({ children }: IHero) => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-black h-[calc(100vh)] -top-[2.5rem]">
      {children}
      <Image
        src={starfield}
        alt=""
        className="absolute h-full max-h-[860px] w-full max-w-[1280px] z-0 object-cover opacity-40"
      />
    </div>
  );
};

export default Hero;
