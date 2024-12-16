import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import AnimatedContent from "@/components/sections/Hero/AnimatedContent";
import Container from "@/components/shared/Container";

const Home = () => {
  return (
    <>
      <Hero>
        <AnimatedContent />
      </Hero>
      <Container as="main">
        <About />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
