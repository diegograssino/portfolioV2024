import { CustomMDXProps } from "@/types/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";

function CustomLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  let href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link className="hover:underline" {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a className="hover:underline" {...props} />;
  }

  return (
    <a
      className="hover:underline border border-white rounded-xl p-2 first:mr-4"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function CustomImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <div className="relative h-[17.5rem] mb-4">
      <Image
        alt={props.alt || "image"}
        src={props.src || ""}
        fill
        className="object-contain !w-auto rounded-xl pb-2"
      />
    </div>
  );
}

function CustomH1(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h2
      className="font-secondary text-4xl sm:text-3xl font-extrabold tracking-tight mt-10 first:mt-0 mb-6"
      {...props}
    />
  );
}

function CustomH2(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h3
      className="font-secondary text-2xl sm:text-1xl font-bold mb-4 mt-2"
      {...props}
    />
  );
}

function CustomH3(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h4
      className="font-secondary text-xl sm:text-lg font-medium mb-3"
      {...props}
    />
  );
}

function CustomP(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) {
  return <p className="leading-7 mb-3" {...props} />;
}

function CustomUl(
  props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
) {
  return <ul className="mb-3 last:mb-0 pl-4" {...props} />;
}

function CustomLi(
  props: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>
) {
  return <li className="mb-1 last:mb-0" {...props} />;
}

export function CustomMDX({ source, components }: CustomMDXProps) {
  let customComponents = {
    Image: CustomImg,
    a: CustomLink,
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    p: CustomP,
    ul: CustomUl,
    li: CustomLi,
  };

  return (
    <MDXRemote
      source={source}
      components={{ ...components, ...(customComponents || {}) }}
    />
  );
}
