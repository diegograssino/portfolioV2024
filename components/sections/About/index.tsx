import Emoji from "@/components/shared/Emoji";
import SectionDetecter from "@/components/shared/SectionDetecter";
import {
  IconBrandAws,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconCode,
} from "@tabler/icons-react";

const About = () => {
  return (
    <SectionDetecter section="about">
      <section className="h-[calc(100vh)]" id="about">
        <div className="h-10" />
        <div className="grid grid-cols-6 grid-rows-8 gap-6 h-[calc(100vh-2.5rem)] py-6 [&>article]:rounded-lg [&>article]:p-4">
          <article className="col-span-6 row-span-3 bg-secondary text-white">
            <h3 className="md:text-6xl md:pb-4">About Me</h3>
            <p className="text-lg md:text-3xl md:font-light lg:text-2xl lg:font-light xl:text-4xl xl:font-light">
              {`Fullstack developer frontend focused (Next JS, React, TypeScript) always motivated to learn new technologies. I'm capable to handle tasks as Backend (Node) with Devops (AWS or similar) too. I've been working with US based clients projects in the last 2 years.`}
            </p>
          </article>
          <article className="flex flex-wrap justify-center gap-4 col-span-6 row-span-3 [&>div]:h-1/2 [&>div]:w-1/6">
            <div className="flex flex-col justify-center items-center">
              <IconBrandReact
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>React</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandNextjs
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>Next js</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandTypescript
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>Typescript</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandNodejs
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>Nodejs</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandJavascript
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>Javascript</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandAws
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>AWS</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandHtml5
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>HTML</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <IconBrandCss3
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>CSS</span>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <IconBrandReactNative
                size={64}
                className="dark:opacity-75 md:scale-125"
              />
              <span>R. Native</span>
            </div>
          </article>
          <article className="row-span-2 col-span-3 lg:col-span-2 flex justify-center items-center bg-tertiary text-black">
            <div className="flex items-start gap-2">
              <p className="text-8xl md:text-[9rem] font-bold">+4</p>
              <p className="text-4xl md:text-6xl font-bold pt-3 md:pt-4">XP</p>
            </div>
          </article>
          {/* TODO Animate code icon */}
          <IconCode
            size={160}
            className="dark:opacity-75 hidden lg:row-span-2 lg:col-span-2 lg:flex lg:items-center lg:justify-center lg:w-full md:mt-4 lg:mt-1"
          />
          <article className="row-span-2 col-span-3 lg:col-span-2 flex flex-col gap-1 md:gap-2 justify-center items-center text-white bg-secondary">
            <p className="flex justify-between w-full">
              <span className="text-xl md:text-4xl font-bold">Spanish:</span>
              <span>
                <Emoji symbol="🇪🇸" />
                <span className="text-xl md:text-4xl ml-1">Native</span>
              </span>
            </p>
            <p className="flex justify-between w-full">
              <span className="text-xl md:text-4xl font-bold">English:</span>
              <span>
                <Emoji symbol="🇺🇸" />
                <span className="text-xl md:text-4xl ml-2">B2</span>
              </span>
            </p>
            <p className="flex justify-between w-full">
              <span className="text-xl md:text-4xl font-bold">Location:</span>
              <span>
                <Emoji symbol="🇦🇷" />
                <span className="text-xl md:text-4xl ml-2">ARG</span>
              </span>
            </p>
          </article>
        </div>
      </section>
    </SectionDetecter>
  );
};

export default About;
