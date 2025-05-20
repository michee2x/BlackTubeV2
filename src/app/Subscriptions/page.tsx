import React from "react";
import Shorts from "../components/Shorts";

const navs = ["All", "Music", "Gaming", "News", "Sports", "Movies", "Live"];

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

export default function Subscriptions() {
  return (
    <div className="min-h-screen">
      <div className="flex w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-4 px-4 py-2 bg-black border-b border-[#303030]">
        {[
          { url: "https://i.imgur.com/G7oYvV1.png", name: "michee2x" },
          {
            url: "https://images.unsplash.com/photo-1579483885149-47cd52fcc7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZmklMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfHx8Mg%3D%3D",
            name: "squidlady",
          },
          {
            url: "https://images.unsplash.com/photo-1743866110171-10c10cabe85f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaWZpJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDI%3D",
            name: "sunny lee",
          },
          {
            url: "https://images.unsplash.com/photo-1702719480722-df746a637624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaWZpJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDI%3D",
            name: "webtrix",
          },
          {
            url: "https://images.unsplash.com/photo-1653585088726-6bed950e377d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNjaWZpJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDI%3D",
            name: "bronzeface",
          },
          {
            url: "https://images.unsplash.com/photo-1646678669357-b4b44fddea81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNjaWZpJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDI%3Du,",
            name: "ladybug",
          },
        ].map((i) => {
          return (
            <div className="flex flex-col items-center space-y-1 cursor-pointer">
              <div className="avatar avatar-online">
                <div className="min-w-16 max-w-16 overflow-hidden rounded-full">
                  <img src={i.url} />
                </div>
              </div>
              <span className="text-[14px]">{i.name}</span>
            </div>
          );
        })}
      </div>

      <nav className="flex w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-4 px-4 py-2 bg-black border-b border-[#303030]">
        {navs.map((i, idx) => (
          <button
            key={idx}
            className={`px-4 text-nowrap w-auto h-8 text-[10px] font-mono cursor-pointer py-1 ${
              idx === 0
                ? "bg-white text-black"
                : "bg-black border-gray-600 text-white"
            } border-[.3px] rounded-full hover:bg-[#424242a1] transition`}
          >
            {i}
          </button>
        ))}
      </nav>

      <main className="px-3 mt-6">
        {/* MOST RELEVANT */}
        <div>
          <h1 className="text-white mb-1">Most relevant</h1>

          <div className="flex min-w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 py-2 bg-black">
            {historyItems.map((item, i) => (
              <div key={i} className="relative min-w-64 h-64">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-lg w-full h-auto object-cover"
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
                  <p className="text-xs text-gray-400">
                    {item.views}
                    {" • "}
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SHORTS */}

        <Shorts />

        <div className="flex flex-col gap-2 mt-6">
          {historyItems.map((item, i) => (
            <div key={i} className="relative min-w-64 h-64">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-lg w-full h-auto object-cover"
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
                <p className="text-xs text-gray-400">
                  {item.views}
                  {" • "}
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
