// app/shorts/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function ShortsPage() {
  const [shorts, setShorts] = useState<any[]>([]);

  useEffect(() => {
    const fetchShorts = async () => {
      const res = await fetch("/api/youtube/shorts/lists?category=28"); // Tech category
      const data = await res.json();
      setShorts(data.items || []);
    };

    fetchShorts();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {shorts.map((video, index) => (
        <div
          key={index}
          className="snap-start h-screen w-full flex items-center justify-center bg-black text-white relative"
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=0&loop=1&playlist=${video.id}`}
            title={video.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="absolute bottom-10 left-4 text-left space-y-1">
            <h2 className="text-xl font-bold">{video.snippet.title}</h2>
            <p className="text-sm text-gray-300">
              {video.snippet.channelTitle} • {video.statistics.viewCount} views
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
