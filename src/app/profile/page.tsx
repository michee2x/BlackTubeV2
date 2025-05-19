import React from "react";
import { BsIncognito } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoMdShareAlt } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io5";
import { MdPerson } from "react-icons/md";

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
    <main className="pl-2 text-white bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4 mb-6">
        <img
          className="w-24 rounded-full h-24 object-cover"
          src="https://i.imgur.com/G7oYvV1.png"
          alt=""
        />
        <h1>Metryx</h1>

        <nav className="flex w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 pl-2 py-2 bg-black border-b border-[#303030]">
          {[
            { icon: <MdPerson />, name: "Switch account" },
            { icon: <IoLogoGoogle />, name: "Google saccount" },
            { icon: <BsIncognito />, name: "Turn on Incognito" },
            { icon: <IoMdShareAlt />, name: "Share channel" },
          ].map((i, idx) => (
            <button
              key={idx}
              className="px-4 flex items-center gap-1 text-nowrap w-auto h-8 text-[10px] cursor-pointer  border-[.3px] border-gray-600 rounded-full bg-[#424242a1]"
            >
              <span className="w-auto text-xl h-full flex items-center">
                {i.icon}
              </span>{" "}
              <span className="w-auto h-full flex items-center">{i.name}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* History */}
      <section>
        <h2 className="text-lg w-full h-auto flex justify-between items-center font-semibold mb-4">
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
      <section>
        <h2 className="text-lg w-full mt-8 h-auto flex justify-between items-center font-semibold mb-4">
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

      {/* Watch later, liked videos, your clips */}
      <section className="mt-10 space-y-6 text-sm">
        <div>
          <p className="font-medium">Watch later</p>
          <p className="text-gray-400">
            Save videos to watch later. Your list shows up right here.
          </p>
        </div>
        <div>
          <p className="font-medium">Liked videos</p>
          <p className="text-gray-400">
            Use the thumbs up icon to like videos. Your list shows up right
            here.
          </p>
        </div>
        <div>
          <p className="font-medium">Your clips</p>
          <p className="text-gray-400">
            Clip and share your favorite moments. Your list shows up right here.
          </p>
        </div>
      </section>
    </main>
  );
};
// This is a simple page component that displays a user's profile with history items and playlists.

export default page;
