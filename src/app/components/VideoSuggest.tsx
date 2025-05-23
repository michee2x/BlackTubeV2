// components/SuggestedVideos.tsx
"use client";

import React, { useEffect, useState } from "react";
import VideoSuggest from "./VideoSuggest";
import Image from "next/image";
import Shorts from "./Shorts";
import Link from "next/link";
import * as motion from "motion/react-client";

interface SuggestedVideo {
  className: string;
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
  videoId: string;
}

const VideoElement = ({
  views,
  title,
  channel,
  className,
  thumbnail,
  videoId,
}: SuggestedVideo) => {
  return (
    <Link href={`/video/${videoId}`} className={`flex gap-3 ${className}`}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="w-32 h-24 relative rounded-[0.40rem] bg-gray-600"
      >
        <Image alt={title} src={thumbnail} fill className="object-cover" />
      </motion.div>
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold line-clamp-2">{title}</p>
        <p className="text-xs text-gray-400">{channel}</p>
        <p className="text-xs text-gray-400">{views}</p>
      </div>
    </Link>
  );
};

const SuggestedVideos = ({ videoId }: { videoId: string }) => {
  const [suggestions, setSuggestions] = useState<SuggestedVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/youtube/suggestions?categoryId=28`);
        const data = await res.json();
        console.log("HIS IS THE FUCKIN DATA", data);
        setSuggestions(data.videos || []);
      } catch (err) {
        console.error("Failed to fetch suggested videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="flex px-2 flex-col gap-4">
      <h2 className="text-white text-lg font-bold">Suggested Videos</h2>
      {loading ? (
        <span className="loading loading-ring loading-xl"></span>
      ) : (
        suggestions.map((video, idx) => {
          return (
            <>
              <VideoElement
                key={idx}
                title={video.title}
                channel={video.channel}
                views={video.views}
                thumbnail={video.thumbnail}
                className="text-white"
                videoId={video.videoId}
              />

              {idx % 4 === 0 && <Shorts length={3} />}
            </>
          );
        })
      )}
    </div>
  );
};

export default SuggestedVideos;

/** 
<div className={`flex gap-3 ${className}`}>
      <video className="w-32 h-20 rounded-[0.40rem] bg-gray-600" />
      <div className="flex flex-col">
        <p className="text-sm font-semibold line-clamp-2">{title}</p>
        <p className="text-xs text-gray-400">{chaannel}</p>
        <p className="text-xs text-gray-400">{views}</p>
      </div>
    </div>*/
