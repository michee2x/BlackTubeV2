"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type SearchContextType = {
  showSearchBar: boolean;
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
};

const SearchTheme = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <SearchTheme.Provider value={{ showSearchBar, setShowSearchBar }}>
      {children}
    </SearchTheme.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchTheme);
  if (!context) throw new Error("useSearchTheme must be within SearchProvider");
  return context;
};
