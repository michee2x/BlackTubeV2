// app/shorts/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface ShortsVideo {
  id: string;
  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

export default function ShortsPage() {
  const { id } = useParams();
  const [shorts, setShorts] = useState<ShortsVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShort() {
      try {
        const res = await fetch(`/api/youtube/shorts/shortbyid?id=${id}`);
        const data = await res.json();
        if (data && data.item) {
          setShorts(data.item);
        }
      } catch (err) {
        console.error("Error fetching shorts:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchShort();
  }, [id]);

  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (!shorts) return <div className="text-white p-4">Short not found.</div>;

  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="w-full max-w-sm">
        <div className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-gray-800 shadow-lg">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${shorts.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${shorts.id}`}
            title={shorts.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-4 space-y-1">
          <h2 className="text-lg font-semibold line-clamp-2">
            {shorts.snippet.title}
          </h2>
          <p className="text-sm text-gray-400">
            by {shorts.snippet.channelTitle}
          </p>
          <p className="text-sm text-gray-400">
            {parseInt(shorts.statistics.viewCount).toLocaleString()} views •{" "}
            {new Date(shorts.snippet.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}
