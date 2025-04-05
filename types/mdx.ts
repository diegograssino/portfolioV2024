import { MDXRemoteProps } from "next-mdx-remote";

export interface CustomMDXProps extends Pick<MDXRemoteProps, "components"> {
  source: string;
}
