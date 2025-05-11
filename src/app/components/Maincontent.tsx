import React from "react";
import { MostPopularVideos } from "../Constants";
import { TimeAgo } from "@/utils/TimeAgo";
import Image from "next/image";
import { FormatViews } from "@/utils/FormatViews";

const Maincontent = () => {
  return (
    <main className="p-4 h-auto w-full bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Video Card Component */}
      {MostPopularVideos.items.map((i, index) => (
        <div key={index} className="flex flex-col space-y-2">
          {/* Thumbnail Placeholder */}
          <div className="w-full overflow-hidden h-48 bg-[#303030] relative rounded-lg">
            <Image
              src={i.snippet.thumbnails.high.url}
              fill
              alt={i.snippet.title}
              className="object-cover rounded-lg"
            />
          </div>
          {/* Video Info */}
          <div className="flex space-x-2">
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
            <div className="flex-1">
              {/* Video Title */}
              <h3 className="text-sm font-medium line-clamp-2">
                {i.snippet.title}
              </h3>
              {/* Channel Name */}
              <p className="text-xs text-gray-400">{i.snippet.channelTitle}</p>
              {/* Views and Upload Time */}
              <p className="text-xs text-gray-400">
                {`${FormatViews(i.statistics.viewCount)} views • ${TimeAgo(
                  i.snippet.publishedAt
                )}`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Maincontent;
