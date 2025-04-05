import { CustomMDX } from "@/components/shared/MDXRenderer/MDXRenderer";
import { Contents } from "@/types/content";

const About = ({ contents }: { contents: Contents[] }) => {
  return (
    <section className="mt-12">
      <article className="min-h-[calc(100vh)] flex flex-col 2lg:px-40 lg:px-20 md:px-10 sm:px-5 pt-10 pb-20 sm:pt-5 sm:pb-10  border border-white rounded-xl">
        {contents.map((content: Contents, i) => (
          <CustomMDX key={i} source={content.content} />
        ))}
      </article>
    </section>
  );
};

export default About;
