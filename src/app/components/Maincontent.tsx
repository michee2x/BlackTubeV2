"use client";

import React, { useEffect } from "react";
import { MostPopularVideos } from "../Constants";
import { TimeAgo } from "@/utils/TimeAgo";
import Image from "next/image";
import { FormatViews } from "@/utils/FormatViews";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useSideBarContext } from "@/Context/SideBarContext";
import { useVideoListContext } from "@/Context/VideoListContext";
import * as motion from "motion/react-client";

const Maincontent = () => {
  const { showSideBar } = useSideBarContext();
  const { VideoList, setVideoList, fetchVideos } = useVideoListContext();

  useEffect(() => {
    fetchVideos("28");
    // Call the function to fetch most popular videos when the component mounts
  }, []);
  // Call the function to fetch most popular videos when the component mounts

  return (
    <main
      className={`lg:mt-[1rem] h-auto w-full bg-black ${
        !showSideBar ? "lg:grid-cols-4 lg:pl-[1rem]" : "lg:pl-[4rem]"
      } grid grid-cols-1 sm:grid-cols-2 lg:justify-between md:grid-cols-3`}
    >
      {/* Video Card Component */}
      {VideoList?.items?.length > 0 ? (
        VideoList?.items?.map((i, index) => (
          <Link
            href={`/video/${i?.id}`}
            key={index}
            className={`flex flex-1 lg:flex-0 ${
              !showSideBar ? "lg:w-[90%]" : ""
            } py-3 px-1 border-b-[.2px] border-gray-700 flex-col`}
          >
            <div className="flex w-full h-auto gap-2">
              <div className="w-10 skeleton h-10 relative overflow-hidden bg-gray-600 rounded-full flex-shrink-0">
                {i?.channelInfo?.thumbnails?.default?.url && (
                  <Image
                    src={i?.channelInfo?.thumbnails?.default?.url}
                    alt={i?.channelInfo?.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-1 h-auto">
                <p className="text-[15px] font-[] font-medium  flex items-center">
                  {`${i.snippet.channelTitle} `}
                  <span className="text-gray-400 font-normal geistsans pl-1">
                    {" "}
                    {`• ${TimeAgo(i?.snippet?.publishedAt)}`}
                  </span>
                </p>
                {/* Video Title */}
                <h3 className="text-[12px] geistsans font-medium mt-1 text-gray-200">
                  {i?.snippet?.title}
                </h3>
              </div>
            </div>

            <div className="w-full gap-3 mt-2 flex-col h-auto flex lg:items-start items-end">
              {/* Thumbnail Placeholder */}
              <motion.div
                whileTap={{ scale: 0.9 }}
                style={{
                  height: i?.snippet?.thumbnails?.medium?.height,
                  width: i?.snippet?.thumbnails?.medium?.width,
                }}
                className=" bg-[#303030] skeleton relative rounded-xl"
              >
                <Image
                  src={i?.snippet?.thumbnails?.high?.url}
                  fill
                  alt={i.snippet.title}
                  className="object-cover w-full h-full rounded-xl"
                />
              </motion.div>

              {/* Video Info */}
              <div
                style={{
                  width: i?.snippet?.thumbnails?.medium?.width,
                }}
                className="flex"
              >
                <div className="flex-1 font-bold pr-1.5 flex justify-between items-center">
                  {/* Views and Upload Time */}
                  <p className="text-[10.3px] items-center gap-[.2px] flex text-gray-400">
                    <FaRegComment className="text-[16px] font-extralight" />
                    {i?.statistics?.viewCount &&
                      `${FormatViews(i?.statistics?.viewCount)}`}
                  </p>

                  <p className="text-[10.3px] items-center gap-[.2px] flex text-gray-400">
                    <FaRetweet className="text-[16px] font-extralight" />
                    {`45`}
                  </p>

                  <p className="text-[10.3px] items-center gap-[.2px] flex text-gray-400">
                    <FaRegHeart className="text-[16px] font-extralight" />
                    {`60k`}
                  </p>

                  <p className="text-[10.3px] items-center gap-[.2px] flex text-gray-400">
                    <BiBarChart className="text-[16px] font-extralight" />
                    {i?.statistics?.viewCount &&
                      `${FormatViews(i?.statistics?.viewCount)}`}
                  </p>

                  <div className="flex gap-4 items-center">
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
          </Link>
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-[80vh]">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      )}
    </main>
  );
};

export default Maincontent;
