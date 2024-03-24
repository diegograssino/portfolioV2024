import { sections } from "@/content/sections";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
} from "@tabler/icons-react";
import Link from "next/link";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <Container className="bg-secondary-lighter dark:bg-secondary-darker text-white pt-8 pb-4">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-row justify-center gap-4">
            <Link href="">
              <IconBrandGithub className="dark:opacity-75" />
            </Link>
            <span className="hidden sm:block">|</span>
            <Link href="">
              <IconBrandLinkedin className="dark:opacity-75" />{" "}
            </Link>

            <span className="hidden sm:block">|</span>
          </div>
          <div className="flex flex-row justify-center gap-4">
            {sections.map((option, i) => (
              <div
                className="flex flex-row gap-2 mb-2 after:content-['|'] after:last:content-[''] text-xs sm:text-base"
                key={i}
              >
                <Link className="dark:opacity-75" href="">
                  {option.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container className="bg-secondary-lighter dark:bg-secondary-darker text-white pb-8">
        <div className="flex flex-col gap-4">
          <div className="self-center w-full h-[1px] bg-white opacity-50 dark:opacity-25" />
          <p className="flex flex-row justify-center gap-1 dark:opacity-75 text-xs sm:text-base">
            <span>Made with</span>
            <IconHeart size={20} className="flex self-center dark:opacity-75" />
            <span>by</span>
            <span className="font-bold text-tertiary-darker dark:text-tertiary-lighter">
              turboDisk
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
