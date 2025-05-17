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
  fetchVideos: (categoryId?: string) => Promise<void>;
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

  async function fetchVideos(categoryId: string = "28") {
    try {
      const res = await fetch(`/api/youtube/videos?category=${categoryId}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Failed to fetch");

      setVideoList(data); // data.items is the array of video objects
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <VideoListTheme.Provider
      value={{ VideoList: videoList, setVideoList, fetchVideos }}
    >
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
