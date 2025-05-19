import React from "react";
import { BsIncognito } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io5";
import { MdPerson } from "react-icons/md";

const page = () => {
  // Simulated data for history items
  const historyItems = [
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
    <main className="p-2 text-white bg-black min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4 mb-6">
        <img
          className="w-24 rounded-full h-24 object-cover"
          src="https://i.imgur.com/G7oYvV1.png"
          alt=""
        />
        <h1>Metryx</h1>

        <nav className="flex w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 px-4 py-2 bg-black border-b border-[#303030]">
          {[
            { icon: <MdPerson />, name: "Switch account" },
            { icon: <IoLogoGoogle />, name: "Google saccount" },
            { icon: <BsIncognito />, name: "Turn on Incognito" },
            { icon: <IoMdShareAlt />, name: "Share channel" },
          ].map((i, idx) => (
            <button
              key={idx}
              className="px-4 flex items-center gap-1 text-nowrap w-auto h-8 text-[10px] cursor-pointer py-1  border-[.3px] border-gray-600 rounded-full bg-[#424242a1]"
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
        <h2 className="text-lg font-semibold mb-4">History</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {historyItems.map((item, i) => (
            <div key={i} className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <span className="absolute bottom-2 right-2 text-sm bg-black/80 px-1 rounded">
                {item.duration}
              </span>
              <div className="mt-2">
                <h3 className="text-sm font-semibold line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400">{item.channel}</p>
                <p className="text-xs text-gray-400">
                  {item.views} • {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-start">
            <div className="bg-gray-700 w-full aspect-video rounded flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl">⋯</div>
                <div className="text-xs mt-2">No videos</div>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium">Liked videos</p>
            <p className="text-xs text-blue-500">View full playlist</p>
          </div>
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
