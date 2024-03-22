import Emoji from "@/components/shared/Emoji";
import image from "@/public/assets/me.png";
import Image from "next/image";
const Hero = () => {
  return (
    <header className="flex flex-col sm:[&>div]:h-1/2 lg:flex-row py-10 justify-center h-[calc(100vh-2.5rem)]">
      <div className="flex flex-col sm:justify-center gap-4 sm:gap-2 lg:gap-10 lg:w-1/2">
        <h1 className="text-4xl sm:text-6xl md:text-7xl">
          {`I'm Diego`}
          <Emoji symbol="👋" />
        </h1>
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-tertiary-darker dark:text-tertiary">
          Fullstack Developer
        </h2>
      </div>
      <div className="hidden sm:flex justify-center opacity-50 dark:opacity-75">
        <Image src={image} alt="My Emoji" className="object-contain" />
      </div>
    </header>
  );
};

export default Hero;
