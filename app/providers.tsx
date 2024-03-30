"use client";

import SectionProvider from "@/contexts/section";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <SectionProvider>{children}</SectionProvider>
    </ThemeProvider>
  );
}
