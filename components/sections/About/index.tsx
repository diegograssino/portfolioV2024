"use client";

import Content from "./about.mdx";
const About = () => {
  return (
    <section
      className="min-h-[calc(100vh)] pt-12 flex flex-col gap-4"
      id="about"
    >
      <Content />
    </section>
  );
};

export default About;
