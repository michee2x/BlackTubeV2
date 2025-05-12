"use client"

import ReactPlayer from "react-player";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <ReactPlayer
      controls
      width="100%"
      height="100%"
      url="https://youtu.be/NMrtK1-d_gg?si=rbL12jYPdrRLZ10N"
    />
  );
}
