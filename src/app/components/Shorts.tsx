"use client";

import { useEffect, useState } from "react";

type ShortItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: {
      medium: { url: string };
    };
  };
};

const Shorts = ({ length = 2 }: { length?: number }) => {
  const [shorts, setShorts] = useState<ShortItem[]>([]);

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const res = await fetch("/api/youtube/shorts");
        const data = await res.json();
        setShorts(data?.items?.slice(0, length ?? 5));
      } catch (err) {
        console.error("Failed to load shorts", err);
      }
    };

    fetchShorts();
  }, []);

  return (
    <section className="lg:p-4 w-full pt-6 px-1 bg-black h-auto border-t border-[#303030]">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <span className="text-white mr-2">Shorts</span>
      </h2>
      <div
        className={`${
          length !== undefined && length > 3
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            : "flex justify-between gap-1"
        }`}
      >
        {shorts?.length > 0
          ? shorts.map((short, index) => (
              <div key={index} className="flex w-full flex-col space-y-2">
                <div className="w-full h-[13rem] bg-[#303030] rounded-lg overflow-hidden">
                  <img
                    src={short.snippet.thumbnails.medium.url}
                    alt={short.snippet.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium line-clamp-2 text-white">
                  {short.snippet.title}
                </h3>
                <p className="text-xs text-gray-400">Shorts</p>
              </div>
            ))
          : [1, 2, 3].map((e, i) => {
              return (
                <div key={i} className="flex w-full flex-col space-y-2">
                  <div className="w-full h-[13rem] bg-[#303030] rounded-lg overflow-hidden"></div>
                  <h3 className="text-sm font-medium line-clamp-2 text-gray-400">
                    Loading...
                  </h3>
                  <p className="text-xs text-gray-400">Shorts</p>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default Shorts;
