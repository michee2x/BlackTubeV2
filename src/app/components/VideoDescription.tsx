"use client";

import { useState } from "react";
import { formatDescriptionToHTML } from "@/utils/formatDescription";

export default function VideoDescription({
  description,
}: {
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const formattedHTML = formatDescriptionToHTML(description);
  const shouldTruncate = description.length > 60; // you can tweak this

  // Truncate HTML safely by slicing text before formatting
  const shortHTML =
    formatDescriptionToHTML(description.slice(0, 60)) +
    (shouldTruncate ? '... <span class="text-blue-600">more</span>' : "");

  return (
    <div
      className={`cursor-pointer text-sm text-gray-200 whitespace-pre-wrap transition-all duration-300`}
      onClick={() => setExpanded(!expanded)}
      dangerouslySetInnerHTML={{ __html: expanded ? formattedHTML : shortHTML }}
    />
  );
}
