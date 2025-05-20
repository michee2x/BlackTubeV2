import React from "react";
import { BiSolidBookmark, BiSolidLike } from "react-icons/bi";
import { BsIncognito } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoMdShareAlt } from "react-icons/io";
import { IoLogoGoogle, IoTimeOutline } from "react-icons/io5";
import { MdMovie, MdOutlineInsertChart, MdPerson } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaGraduationCap, FaRegQuestionCircle, FaVideo } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import * as motion from "motion/react-client";

type data = {
  title: string;
  channel: string;
  views: string;
  time: string;
  thumbnail: string;
  duration: string;
}[];

const page = () => {
  // Simulated data for history items
  const historyItems: data = [
    {
      title: "Charli xcx - party 4 u (official video)",
      channel: "Charli xcx",
      views: "3.1M views",
      time: "4 days ago",
      thumbnail: "https://i.ytimg.com/vi/fL8OEppD70w/mqdefault.jpg", // replace with real paths
      duration: "4:57",
    },
    {
      title: "LISA - WHEN I’M WITH YOU feat. Tyla (Official Music...)",
      channel: "LLOUD Official",
      views: "5.6M views",
      time: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/agqoYIjl-fw/mqdefault.jpg",
      duration: "3:11",
    },
    {
      title: "Roblox Italian Brainrot Training With My CRAZY FAN GIRLS...",
      channel: "More Techy",
      views: "166K views",
      time: "7 days ago",
      thumbnail: "https://i.ytimg.com/vi/WCNaTgHXfzg/mqdefault.jpg",
      duration: "14:56",
    },
  ];

  return (
    <main className=" text-white bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4 mb-6">
        <div
          className="w-full relative h-40"
          style={{
            backgroundImage: "url('https://i.imgur.com/PXsuopF.jpeg')",
            backgroundSize: "150%",
            backgroundPosition: "60% 20%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="text-xl absolute right-5 top-3 flex flex-col gap-[2.5px] cursor-pointer">
            {[1, 2, 3].map((e) => (
              <span className="w-[4px] h-[4px] bg-white rounded-full" />
            ))}
          </span>
          <img
            className="w-[7rem] absolute -bottom-[70%] border-4 border-black -translate-1/2 left-1/2 rounded-full h-[7rem] object-cover"
            src="https://i.imgur.com/G7oYvV1.png"
            alt=""
          />
        </div>
        <div className="mt-12">
          <h1 className="text-gray-400">~ Metryx</h1>
        </div>

        <nav className="flex w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 pl-2 py-2 bg-black border-b border-[#303030]">
          {[
            { icon: <MdPerson />, name: "Switch account" },
            { icon: <IoLogoGoogle />, name: "Google saccount" },
            { icon: <BsIncognito />, name: "Turn on Incognito" },
            { icon: <IoMdShareAlt />, name: "Share channel" },
          ].map((i, idx) => (
            <motion.button
              whileTap={{ scale: 0.8 }}
              key={idx}
              className="px-4 flex items-center gap-1 text-nowrap w-auto h-8 text-[10px] cursor-pointer  border-[.3px] border-gray-600 rounded-full bg-[#424242a1]"
            >
              <span className="w-auto text-xl h-full flex items-center">
                {i.icon}
              </span>{" "}
              <span className="w-auto h-full flex items-center">{i.name}</span>
            </motion.button>
          ))}
        </nav>
      </div>
      {/* History */}
      <section className="pl-2">
        <h2 className="text-lg pr-2 w-full h-auto flex justify-between items-center font-semibold mb-4">
          <span>History</span>
          <button className="px-4 flex items-center gap-1 text-nowrap w-auto h-8 text-[10px] cursor-pointer py-1  border-[.3px] border-gray-600 rounded-full bg-black hover:bg-[#424242a1]">
            View all
          </button>
        </h2>
        <div className="flex min-w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 py-2 bg-black">
          {historyItems.map((item, i) => (
            <div key={i} className="relative min-w-[45vw] h-40">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-lg w-full h-24 object-cover"
              />
              <div className="mt-2">
                <h3 className="text-sm flex gap-1 justify-between font-semibold line-clamp-2">
                  {`${item.title.slice(0, 30)}...`}{" "}
                  <span className="text-xl flex flex-col gap-[2.5px] cursor-pointer">
                    {[1, 2, 3].map((e) => (
                      <span className="w-[3px] h-[3px] bg-white rounded-full" />
                    ))}
                  </span>
                </h3>
                <p className="text-xs text-gray-400">{item.channel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section className="pl-2">
        <h2 className="text-lg pr-2 w-full mt-8 h-auto flex justify-between items-center font-semibold mb-4">
          <span>Playlists</span>
          <span className="flex items-center gap-2 ">
            <FiPlus className="text-xl text-white" />
            <button className="px-4 flex items-center gap-1 text-nowrap w-auto h-8 text-[10px] cursor-pointer py-1  border-[.3px] border-gray-600 rounded-full bg-black hover:bg-[#424242a1]">
              View all
            </button>
          </span>
        </h2>
        <div className="flex min-w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 py-2 bg-black">
          {historyItems.map((item, i) => (
            <div key={i} className="relative min-w-[45vw] h-40">
              <div>
                <div className="w-full h-[6.4rem] relative">
                  <div className="h-full w-[95%] rounded-xl -translate-x-1/2 left-1/2 bg-gray-400 absolute bottom-0"></div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-lg bottom-0 w-full z-10 absolute h-24 object-cover"
                  />
                  <div className="w-full text-[14px] bottom-0 flex flex-col gap-1.5 items-center justify-center h-24 z-20 bg-black/50 absolute">
                    {i === 0 ? (
                      <BiSolidLike className="text-xl text-white" />
                    ) : i === 1 ? (
                      <IoTimeOutline className="text-xl text-white" />
                    ) : (
                      <BiSolidBookmark className="text-xl text-white" />
                    )}
                    {i === 0 ? 152 : i === 1 ? 68 : 5}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-sm flex gap-1 justify-between font-semibold line-clamp-2">
                  {`${item.title.slice(0, 30)}...`}{" "}
                  <span className="text-xl flex flex-col gap-[2.5px] cursor-pointer">
                    {[1, 2, 3].map((e) => (
                      <span className="w-[3px] h-[3px] bg-white rounded-full" />
                    ))}
                  </span>
                </h3>
                <p className="text-xs text-gray-400">{item.channel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Watch later, liked videos, your clips */}
      <section className="mt-10 flex border-b-[2px] pb-3 border-gray-600 flex-col space-y-6 text-sm">
        {[
          { icon: <GoVideo />, name: "Your Video" },
          { icon: <LiaDownloadSolid />, name: "Downloads" },
          { icon: <FaGraduationCap />, name: "Your Courses" },
          { icon: <IoMdShareAlt />, name: "Share channel" },
        ].map((i, idx) => {
          return (
            <div key={idx} className="flex gap-6 px-6 items-center py-2">
              <span className="text-2xl text-white">{i.icon}</span>
              <p className="text-gray-400">{i.name}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-5 flex border-b-[2px] pb-3 border-gray-600 flex-col space-y-6 text-sm">
        {[
          { icon: <MdMovie />, name: "Your Movies" },
          { icon: <FaVideo />, name: "Get Youtube Premium" },
        ].map((i, idx) => {
          return (
            <div key={idx} className="flex gap-6 px-6 items-center py-2">
              <span className="text-2xl text-white">{i.icon}</span>
              <p className="text-gray-400">{i.name}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-5 flex border-b-[2px] pb-3 border-gray-600 flex-col space-y-6 text-sm">
        {[
          { icon: <MdOutlineInsertChart />, name: "Time Watched" },
          { icon: <FaRegQuestionCircle />, name: "Help & feedback" },
        ].map((i, idx) => {
          return (
            <div key={idx} className="flex gap-6 px-6 items-center py-2">
              <span className="text-2xl text-white">{i.icon}</span>
              <p className="text-gray-400">{i.name}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};
// This is a simple page component that displays a user's profile with history items and playlists.

export default page;
