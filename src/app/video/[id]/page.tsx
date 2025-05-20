"use client";

import VideoPlayer from "@/app/components/VideoPlayer";
import CommentSection from "@/app/components/CommentSection";
import SuggestionsSidebar from "@/app/components/SuggestionsSidebar";
import Shorts from "@/app/components/Shorts";
import VideoSuggest from "@/app/components/VideoSuggest";

import {
  FaCheckSquare,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaDownload,
  FaEllipsisH,
} from "react-icons/fa";
import Image from "next/image";
import { VideoItems } from "@/types";
import { FormatViews } from "@/utils/FormatViews";
import { TimeAgo } from "@/utils/TimeAgo";
import { useVideoListContext } from "@/Context/VideoListContext";
import { useParams } from "next/navigation"; // ✅ App Router

import { useEffect, useState } from "react";
import VideoDescription from "@/app/components/VideoDescription";

function VideoHeader({ video }: { video: VideoItems }) {
  const { snippet, statistics, channelInfo } = video;

  return (
    <div className="text-white geistsans p-4 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold mb-6">{snippet?.title}</h1>

      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        {/* Channel Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative rounded-full bg-gray-500 overflow-hidden">
            {channelInfo?.thumbnails?.default?.url && (
              <Image
                src={channelInfo?.thumbnails?.default?.url}
                fill
                alt={`${channelInfo?.title} Channel`}
                className="rounded-full object-cover"
              />
            )}
          </div>
          <div>
            <p className="font-semibold text-[13px] flex items-center gap-1">
              {snippet?.channelTitle}
              <span className="text-blue-500">✔</span>
            </p>
            <p className="text-sm text-gray-400">8.13M subscribers</p>
          </div>
          <button className="ml-4 bg-white text-black px-4 py-1 rounded font-semibold hover:bg-gray-200">
            Subscribe
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 text-sm">
          <button className="flex items-center gap-1 bg-gray-400/20 px-3 py-1 rounded hover:bg-gray-700">
            <FaThumbsUp />
            <span>
              {statistics?.likeCount &&
                FormatViews(statistics.likeCount.toString())}
            </span>
          </button>
          <button className="flex items-center gap-1 bg-gray-400/20 px-3 py-1 rounded hover:bg-gray-700">
            <FaShare /> Share
          </button>
          <button className="flex items-center gap-1 bg-gray-400/20 px-3 py-1 rounded hover:bg-gray-700">
            <FaDownload /> Download
          </button>
          <button className="bg-gray-400/20 p-2 rounded hover:bg-gray-700">
            <FaEllipsisH />
          </button>
        </div>
      </div>

      {/* Metadata and Description */}
      {snippet?.description && (
        <VideoDescription description={snippet?.description} />
      )}

      {/* Comment Section Header */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        {/* Comment Input */}
        <div className="flex items-start gap-3">
          <img
            className="w-10 rounded-full h-10 object-cover"
            src="https://i.imgur.com/G7oYvV1.png"
            alt=""
          />
          <input
            className="bg-transparent border-b border-gray-600 w-full focus:outline-none focus:border-gray-400 text-sm py-1"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [video, setVideo] = useState<VideoItems | undefined>({} as VideoItems);
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(`/api/youtube/videos/getByIndex?videoId=${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch video");
        }
        const data = await res.json();
        setVideo(data);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, []);
  return (
    <div className="flex geistsans bg-black flex-col lg:pr-12 w-full lg:flex-row gap-4">
      <div className="flex-1">
        {video ? (
          <>
            <VideoPlayer url={video?.id} />
            <VideoHeader video={video} />
            <CommentSection videoId={id} />
          </>
        ) : (
          <div className="flex items-center justify-center h-screen text-white text-lg">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        )}
      </div>
      <aside className="w-full lg:w-1/3">
        <VideoSuggest videoId={""} />

        <SuggestionsSidebar />
      </aside>
    </div>
  );
}
