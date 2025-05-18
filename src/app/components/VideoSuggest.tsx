// components/SuggestedVideos.tsx
"use client";

import React, { useEffect, useState } from "react";
import VideoSuggest from "./VideoSuggest";

interface SuggestedVideo {
  className: string;
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
}

const VideoElement = ({
  views,
  title,
  channel,
  className,
  thumbnail,
}: SuggestedVideo) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <video
        src={thumbnail}
        className="w-32 h-20 rounded-[0.40rem] bg-gray-600"
      />
      <div className="flex flex-col">
        <p className="text-sm font-semibold line-clamp-2">{title}</p>
        <p className="text-xs text-gray-400">{channel}</p>
        <p className="text-xs text-gray-400">{views}</p>
      </div>
    </div>
  );
};

const SuggestedVideos = ({ videoId }: { videoId: string }) => {
  const [suggestions, setSuggestions] = useState<SuggestedVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/youtube/suggestions?videoId=${videoId}`);
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
  }, [videoId]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-lg font-bold">Suggested Videos</h2>
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        suggestions.map((video, idx) => (
          <VideoElement
            key={idx}
            title={video.title}
            channel={video.channel}
            views={video.views}
            thumbnail={video.thumbnail}
            className="text-white"
          />
        ))
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
