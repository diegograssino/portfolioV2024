import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import AnimatedContent from "@/components/sections/Hero/AnimatedContent";
import Container from "@/components/shared/Container";

import { Contents } from "@/types/content";
import { Fragment } from "react";
import { CustomMDX } from "../components/shared/MDXRenderer/MDXRenderer";
import { getAllContent } from "../utils/mdx";

export function generateStaticParams() {
  let contents = getAllContent();

  return contents.map(({ slug, content }) => ({
    slug: slug,
    content: content,
  }));
}

export default function Home({ params }: { params: { contents: Contents[] } }) {
  const { contents } = params;
  console.log(contents);

  // if (!contents) {
  //   return null;
  // }

  return (
    <>
      <Hero>
        <AnimatedContent />
      </Hero>
      <Container as="main">
        {contents.map((content, i) => (
          <Fragment key={i}>
            <CustomMDX source={content.content} />
          </Fragment>
        ))}
        <Contact />
      </Container>
    </>
  );
}
