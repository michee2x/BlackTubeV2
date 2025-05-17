"use client";

import { MostPopularVideosType } from "@/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type VideoListContextType = {
  VideoList: MostPopularVideosType;
  setVideoList: Dispatch<SetStateAction<MostPopularVideosType>>;
};

const VideoListTheme = createContext<VideoListContextType | undefined>(
  undefined
);

export const VideoListProvider = ({ children }: { children: ReactNode }) => {
  const [videoList, setVideoList] = useState<MostPopularVideosType>({
    kind: "",
    etag: "",
    items: [],
    nextPageToken: "",
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0,
    },
  });

  return (
    <VideoListTheme.Provider value={{ VideoList: videoList, setVideoList }}>
      {children}
    </VideoListTheme.Provider>
  );
};

export const useVideoListContext = () => {
  const context = useContext(VideoListTheme);
  if (!context)
    throw new Error("useVideoListContext must be withinVideoListProvider");
  return context;
};
