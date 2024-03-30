import SectionDetecterWrapper from "@/components/shared/SectionDetecterWrapper";
import {
  IconBrandAws,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
} from "@tabler/icons-react";

const About = () => {
  return (
    <SectionDetecterWrapper section="about">
      <section className="h-[calc(100vh)]" id="about">
        <div className="h-10" />
        <div className="grid grid-cols-2 grid-rows-8 gap-6 h-[calc(100vh-2.5rem)] py-6 [&>article]:rounded-lg [&>article]:p-4">
          <article className="col-span-2 row-span-3 bg-secondary text-white">
            <h3 className="md:text-4xl md:pb-4">About Me</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
              aut? Ipsum neque fugit sequi, possimus odit nulla quaerat
              cupiditate ullam veniam quia blanditiis obcaecati, repudiandae
              eaque natus distinctio facilis maiores.
            </p>
          </article>
          <article className="flex flex-wrap justify-center gap-4 col-span-2 row-span-3 [&>div]:h-1/2 [&>div]:w-1/6">
            <div className="flex flex-col justify-center items-center">
              <IconBrandReact size={48} className="opacity-75" />
              <span>React</span>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <IconBrandReactNative size={48} className="opacity-75" />
              <span>R. Native</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandNextjs size={48} className="opacity-75" />
              <span>Next js</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandNodejs size={48} className="opacity-75" />
              <span>Nodejs</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandJavascript size={48} className="opacity-75" />
              <span>Javascript</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandAws size={48} className="opacity-75" />
              <span>AWS</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandTypescript size={48} className="opacity-75" />
              <span>Typescript</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandHtml5 size={48} className="opacity-75" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandCss3 size={48} className="opacity-75" />
              <span>CSS</span>
            </div>
          </article>
          <article className="row-span-2 flex flex-col justify-center items-center bg-tertiary text-black">
            <p className="text-6xl font-bold">+4 XP</p>
            <p className="text-4xl">years</p>
          </article>
          <article className="flex gap-1 items-center justify-center bg-[#0077b5] text-white">
            <IconBrandLinkedin size={30} />
            <p className="text-3xl">LinkedIn</p>
          </article>
          <article className="flex gap-1 items-center justify-center bg-black text-white">
            <IconBrandGithub size={30} />
            <p className="text-3xl">Github</p>
          </article>
        </div>
      </section>
    </SectionDetecterWrapper>
  );
};

export default About;
