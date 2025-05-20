"use client";

import { useEffect, useRef, useState } from "react";

export default function ShortsPage() {
  const [shorts, setShorts] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchShorts = async () => {
      const res = await fetch("/api/youtube/shorts/lists?category=28");
      const data = await res.json();
      setShorts(data.items || []);
    };

    fetchShorts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6, // 60% in view
      }
    );

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [shorts]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      {shorts.map((video, index) => (
        <div
          key={index}
          data-index={index}
          className="snap-start h-screen w-full flex items-center justify-center bg-black text-white relative"
        >
          <iframe
            className="w-full h-full"
            src={
              activeIndex === index
                ? `https://www.youtube.com/embed/${video.id}?autoplay=1&controls=0&loop=1&playlist=${video.id}`
                : "about:blank"
            }
            title={video.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="absolute bottom-10 left-4 text-left space-y-1">
            <h2 className="text-xl font-bold">{video.snippet.title}</h2>
            <p className="text-sm text-gray-300">
              {video.snippet.channelTitle} • {video.statistics?.viewCount || 0}{" "}
              views
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
