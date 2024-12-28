import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import AnimatedContent from "@/components/sections/Hero/AnimatedContent";
import Container from "@/components/shared/Container";

import { Fragment } from "react";
import { CustomMDX } from "../components/shared/MDXRenderer/MDXRenderer";
import { getAllContent } from "../utils/mdx";

export async function generateStaticParams() {
  let posts = getAllContent();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Home() {
  let contents = getAllContent();

  if (!contents) {
    return null;
  }

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
