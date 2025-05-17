"use client";

import { SearchProvider } from "@/Context/SearchContext";
import { SideBarProvider } from "@/Context/SideBarContext";
import { VideoListProvider } from "@/Context/VideoListContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <VideoListProvider>
        <SideBarProvider>{children}</SideBarProvider>
      </VideoListProvider>
    </SearchProvider>
  );
}
