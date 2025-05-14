"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type SideBarContextType = {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
};

const SideBarTheme = createContext<SideBarContextType | undefined>(undefined);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <SideBarTheme.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </SideBarTheme.Provider>
  );
};

export const useSideBarContext = () => {
  const context = useContext(SideBarTheme);
  if (!context) throw new Error("useSearchTheme must be within SearchProvider");
  return context;
};
