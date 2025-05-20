"use client";

import Link from "next/link";
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
      <div className="flex w-full hide-scrollbar lg:overflow-x-auto h-auto space-x-2 py-2 bg-black">
        {shorts?.length > 0
          ? shorts.map((short, index) => (
              <Link
                href={`/shorts/${short?.id?.videoId}`}
                key={index}
                className="flex w-full flex-col space-y-2"
              >
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
              </Link>
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
