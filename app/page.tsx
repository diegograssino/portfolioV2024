import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import AnimatedContent from "@/components/sections/Hero/AnimatedContent";
import Portfolio from "@/components/sections/Portfolio";
import Container from "@/components/shared/Container";

const Home = () => {
  return (
    <>
      <Hero>
        <AnimatedContent />
      </Hero>
      <Container as="main">
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
