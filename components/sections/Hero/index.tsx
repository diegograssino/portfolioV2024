import Container from "@/components/shared/Container";

import ParamPusherWrapper from "@/components/shared/ParamPusherWrapper";
import { IHero } from "@/types/sections";
import Image from "next/image";
import starfield from "../../../public/assets/starfield.gif";

const Hero = ({ children }: IHero) => {
  return (
    <ParamPusherWrapper param="">
      <header className="relative flex flex-col justify-center items-center bg-black h-[calc(100vh)] -top-[2.5rem]">
        <Container className="flex flex-col gap-6 justify-center items-center">
          {children}
        </Container>
        <Image
          src={starfield}
          alt="Astronaut floating in the space background"
          className="absolute h-full max-h-[860px] w-full max-w-[1280px] z-0 object-cover opacity-40"
        />
      </header>
    </ParamPusherWrapper>
  );
};

export default Hero;
