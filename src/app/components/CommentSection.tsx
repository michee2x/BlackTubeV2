"use client";

import { useEffect, useState } from "react";
import VideoDescription from "./VideoDescription";

type Comment = {
  author: string;
  text: string;
};

export default function CommentSection({ videoId }: { videoId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [total, setTotal] = useState(0);
  const max = 5;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `/api/youtube/comments?videoId=${videoId}&max=${max}`
        );
        const data = await res.json();

        setComments(data.comments);
        setTotal(data.totalComments);
      } catch (err) {
        console.error("Error loading comments", err);
      }
    };

    fetchComments();
  }, [videoId]);

  return (
    <div className="space-y-4 px-3 mt-6">
      <p className="text-gray-300 font-medium">
        Showing {comments?.length && comments.length} of {total} comments:
      </p>
      <div className="flex flex-col gap-1">
        {comments.map((c, i) => (
          <div key={i} className="bg-gray-900 p-3 rounded-md">
            <p className="font-semibold text-sm">{c.author}</p>
            <VideoDescription description={c.text} />
            <div className="flex items-center gap-2 mt-2">
              <button className="text-gray-400 hover:text-gray-300">
                Reply
              </button>
              <button className="text-gray-400 hover:text-gray-300">
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
