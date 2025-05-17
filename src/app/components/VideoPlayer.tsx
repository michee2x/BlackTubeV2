"use client";

import ReactPlayer from "react-player";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
