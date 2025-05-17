"use client";

import ReactPlayer from "react-player";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <iframe
      className="w-full h-[200px] lg:h-[500px] rounded-xl"
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
