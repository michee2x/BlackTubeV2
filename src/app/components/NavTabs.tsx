"use client";
import { Catamaran } from "next/font/google";
import React from "react";
import { Category } from "../Constants";
import { useVideoListContext } from "@/Context/VideoListContext";
import * as motion from "motion/react-client";

const NavTabs = () => {
  const { VideoList, setVideoList, fetchVideos } = useVideoListContext();
  return (
    <nav className="flex w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 pl-2 py-2 bg-black border-b border-[#303030]">
      {Category.items.map((i, idx) => (
        <motion.button
          whileTap={{ scale: 0.8 }}
          key={idx}
          onClick={() => fetchVideos(i.id)}
          className="px-4 flex items-center gap-1 text-nowrap w-auto h-8 text-[10px] cursor-pointer  border-[.3px] border-gray-600 rounded-full bg-[#424242a1]"
        >
          {i.snippet.title}
        </motion.button>
      ))}
    </nav>
  );
};

export default NavTabs;
