"use client";
import { IParamPusherWrapper } from "@/types/shared";
import { useInView } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const ParamPusherWrapper = ({ children, param }: IParamPusherWrapper) => {
  const ref = useRef(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isInView = useInView(ref, { amount: 0.6 });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (isInView) {
      param === ""
        ? router.push(pathname)
        : router.push(pathname + "?" + createQueryString("section", param));
    }
  }, [isInView]);
  return <div ref={ref}>{children}</div>;
};

export default ParamPusherWrapper;
