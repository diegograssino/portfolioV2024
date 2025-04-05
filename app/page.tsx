import Hero from "@/components/sections/Hero";
import AnimatedContent from "@/components/sections/Hero/AnimatedContent";
import Container from "@/components/shared/Container";

import About from "@/components/sections/About";
import { Contents } from "@/types/content";
import { notFound } from "next/navigation";
import { getAllContent } from "../utils/mdx";
import { metadata } from "./layout";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateStaticParams() {
  const contents = await getAllContent();

  return contents.map(({ slug, content }) => ({
    content,
    metadata,
  }));
}

export default async function Home() {
  const contents = (await getAllContent().map(({ metadata, content }) => ({
    metadata,
    content,
  }))) as Contents[];

  if (!contents) {
    return notFound();
  }

  return (
    <>
      <Hero>
        <AnimatedContent />
      </Hero>
      <Container as="main" id="content">
        <About contents={contents} />
      </Container>
    </>
  );
}
