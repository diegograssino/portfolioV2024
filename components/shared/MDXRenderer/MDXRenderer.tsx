import { CustomMDXProps } from "@/types/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from "react";

// function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
//   let headers = data.headers.map((header, index) => (
//     <th key={index}>{header}</th>
//   ));
//   let rows = data.rows.map((row, index) => (
//     <tr key={index}>
//       {row.map((cell, cellIndex) => (
//         <td key={cellIndex}>{cell}</td>
//       ))}
//     </tr>
//   ));

//   return (
//     <table>
//       <thead>
//         <tr>{headers}</tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

function CustomLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  let href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return <Image alt={props.alt || "image"} src={props.src || ""} fill />;
}

export function CustomMDX({ source, components }: CustomMDXProps) {
  let customComponents = {
    // Image: Img,
    img: CustomImg,
    a: CustomLink,
  };

  return (
    <MDXRemote
      source={source}
      components={{ ...components, ...(customComponents || {}) }}
    />
  );
}
