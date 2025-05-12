import React from "react";
import { MostPopularVideos } from "../Constants";
import { TimeAgo } from "@/utils/TimeAgo";
import Image from "next/image";
import { FormatViews } from "@/utils/FormatViews";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";

const Maincontent = () => {
  return (
    <main className="p-1 h-auto w-full bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Video Card Component */}
      {MostPopularVideos.items.map((i, index) => (
        <div key={index} className="flex gap-1">
          {/* Channel Icon Placeholder */}
          <div className="w-10 h-10 relative overflow-hidden bg-gray-600 rounded-full flex-shrink-0">
            {i.snippet.thumbnails.default && (
              <Image
                src={i.snippet.thumbnails.default.url}
                alt={i.snippet.channelTitle}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-1 flex-col space-y-2">
            <p className="text-[14px] flex items-center">
              {`${i.snippet.channelTitle} `}
              <p className="text-gray-400 pl-1">
                {" "}
                {`• ${TimeAgo(i.snippet.publishedAt)}`}
              </p>
            </p>
            {/* Video Title */}
            <h3 className="text-xs text-gray-200">{i.snippet.title}</h3>
            {/* Thumbnail Placeholder */}
            <div className="max-w-full overflow-hidden min-h-40 max-h-48 bg-[#303030] relative rounded-xl">
              <Image
                src={i.snippet.thumbnails.high.url}
                fill
                alt={i.snippet.title}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            {/* Video Info */}
            <div className="flex space-x-2">
              <div className="flex-1 pr-1.5 flex justify-between font-extralight items-center">
                {/* Views and Upload Time */}
                <p className="text-xs items-center gap-1 flex text-gray-400">
                  <FaRegComment className="text-[16px] font-extralight" />
                  {`${FormatViews(i.statistics.viewCount)}`}
                </p>

                <p className="text-xs items-center gap-1 flex text-gray-400">
                  <FaRetweet className="text-[16px] font-extralight" />
                  {`${FormatViews(i.statistics.viewCount)}`}
                </p>

                <p className="text-xs items-center gap-1 flex text-gray-400">
                  <FaRegHeart className="text-[16px] font-extralight" />
                  {`${FormatViews(i.statistics.viewCount)}`}
                </p>

                <p className="text-xs items-center gap-1 flex text-gray-400">
                  <BiBarChart className="text-[16px] font-extralight" />
                  {`${FormatViews(i.statistics.viewCount)}`}
                </p>

                <p className="text-xs items-center gap-1 flex text-gray-400">
                  <FiBookmark className="text-[16px] font-extralight" />
                </p>

                <p className="text-xs items-center gap-1 flex text-gray-400">
                  <IoShareSocialOutline className="text-[16px] font-extralight" />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Maincontent;
