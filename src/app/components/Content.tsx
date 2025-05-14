"use client";

import { useSideBarContext } from "@/Context/SideBarContext";
import React, { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  const { showSideBar } = useSideBarContext();
  return (
    <div
      className={`flex-1 max-w-full ${
        !showSideBar ? "lg:ml-0" : "lg:ml-[6%]"
      } hide-scrollbar h-auto`}
    >
      {children}
    </div>
  );
};

export default Content;
