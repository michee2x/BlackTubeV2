import React from "react";

const VideoSuggest = ({
  title,
  channel,
  views,
  className,
}: {
  title: string;
  channel: string;
  views: string;
  className?: string;
}) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <div className="w-32 h-20 rounded-[0.40rem] bg-gray-600" />
      <div className="flex flex-col">
        <p className="text-sm font-semibold line-clamp-2">{title}</p>
        <p className="text-xs text-gray-400">{channel}</p>
        <p className="text-xs text-gray-400">{views}</p>
      </div>
    </div>
  );
};

export default VideoSuggest;
