import SectionDetecterWrapper from "@/components/shared/SectionDetecter";
import { IHero } from "@/types/sections";
import Image from "next/image";
import starfield from "../../../public/assets/starfield.gif";

const Hero = ({ children }: IHero) => {
  return (
    <SectionDetecterWrapper section="">
      <header className="relative flex flex-col justify-center items-center bg-black h-[calc(100vh)] -top-[2.5rem]">
        {children}
        <Image
          src={starfield}
          alt="Astronaut floating in the space background"
          className="absolute h-full max-h-[860px] w-full max-w-[1280px] z-0 object-cover opacity-40"
        />
      </header>
    </SectionDetecterWrapper>
  );
};

export default Hero;
