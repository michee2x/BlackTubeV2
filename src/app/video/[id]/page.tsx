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

function VideoHeader({ i }: { i: VideoItems | undefined }) {
  return (
    <div className="text-white geistsans p-4 max-w-5xl mx-auto">
      <h1 className="text-xl  font-bold mb-6">{i?.snippet?.title}</h1>

      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        {/* Channel Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden">
            <Image
              src="/anatoly-avatar.png"
              alt="Anatoly Avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-[13px] flex items-center gap-1">
              {i?.snippet?.channelTitle}{" "}
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
            <FaThumbsUp />{" "}
            <span>
              {i?.statistics?.likeCount &&
                FormatViews(i?.statistics?.likeCount?.toString())}
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
      <div className="bg-[#272727] p-4 rounded-md text-sm space-y-2">
        <p className="text-white font-semibold">
          {i?.statistics?.viewCount && FormatViews(i?.statistics?.viewCount)}{" "}
          views{" "}
          <span className="text-gray-400 font-normal">
            {i?.snippet?.publishedAt && TimeAgo(i?.snippet?.publishedAt)}
          </span>{" "}
          <span className="text-blue-400">#anatoly #gymprank #prank</span>
        </p>
        <p>
          <span className="text-green-500">
            <FaCheckSquare className="inline mr-1" />
          </span>
          My PowerBuilding Secret training program for Home & GYM{" "}
          <a
            className="text-blue-400 hover:underline"
            href="https://shmondenkovladimir.com"
            target="_blank"
          >
            https://shmondenkovladimir.com
          </a>
        </p>
        <p>
          <span className="text-green-500">
            <FaCheckSquare className="inline mr-1" />
          </span>
          Anatoly Merchandise Available Now 🍿🔥{" "}
          <a
            className="text-blue-400 hover:underline"
            href="https://anatolyapparel.com"
            target="_blank"
          >
            https://anatolyapparel.com
          </a>{" "}
          ...<span className="text-blue-400">more</span>
        </p>
      </div>

      {/* Comment Section Header */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">9,853 Comments</p>
          <p className="text-sm text-gray-400">Sort by</p>
        </div>

        {/* Comment Input */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-600" />
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

  const { VideoList, setVideoList } = useVideoListContext();
  const id = typeof params?.id === "string" ? params.id : "";

  useEffect(() => {
    if (VideoList?.items && id) {
      const foundVideo = VideoList.items.find((i: VideoItems) => i.id === id);
      setVideo(foundVideo);
    }
  }, [VideoList?.items, id]);
  return (
    <>
      <div className="flex geistsans bg-black flex-col lg:pr-12 w-full lg:flex-row gap-4">
        <div className="flex-1">
          <VideoPlayer url={`https://www.youtube.com/watch?v=${video?.id}`} />
          <VideoHeader i={video} />
          {/* <ActionButtons />
          <ChannelInfo /> */}
          <CommentSection />
        </div>
        <div className="w-full lg:w-1/3">
          <VideoSuggest
            title="Suggested Video Title"
            channel="Random channel"
            views="10M views"
            className="my-6"
          />
          <Shorts length={3} />
          <SuggestionsSidebar />
        </div>
      </div>
    </>
  );
}
