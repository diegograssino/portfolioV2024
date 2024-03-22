import Container from "@/components/shared/Container";
import Emoji from "@/components/shared/Emoji";
import Image from "next/image";
import background from "../../../public/assets/hero.png";
const Hero = () => {
  return (
    <header className="flex flex-col justify-center bg-white/50 dark:bg-black/70 h-[calc(100vh-2.5rem)] relative">
      <Container className="flex flex-col gap-6 justify-center items-center px-5">
        <h1 className="flex flex-col gap-6 md:gap-10 xl:gap-2 pb-[40%] sm:pb-[30%] md:pb-[20%] lg:pb-[10%]">
          <div className="text-4xl sm:text-6xl md:text-7xl">
            <span>{`I'm Diego `}</span>
            <Emoji symbol="👋" />
          </div>
          <div className="flex flex-col xl:flex-row xl:gap-6 text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-tertiary-darker dark:text-tertiary">
            <span>Fullstack</span>
            <span>Developer</span>
          </div>
        </h1>
      </Container>
      <Image
        src={background}
        alt="Astronaut floating in the space background"
        className="absolute h-full object-cover z-[-1]"
      />
    </header>
  );
};

export default Hero;
