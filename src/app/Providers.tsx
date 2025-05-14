"use client";

import { SearchProvider } from "@/Context/SearchContext";
import { SideBarProvider } from "@/Context/SideBarContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <SideBarProvider>{children}</SideBarProvider>
    </SearchProvider>
  );
}
