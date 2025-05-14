import React from "react";
import Image from "next/image"; // Ensure you have the correct import for Image

const YouTubeLogo = () => {
  return (
    <div className="flex items-center px-4 py-2 w-fit rounded">
      <div className="lg:flex hidden items-center justify-center w-8 h-6 bg-white rounded lg:mr-2">
        {/* Play Triangle */}
        <div
          className="w-0 h-0 ml-1
          border-t-[8px] border-t-transparent
          border-l-[12px] border-l-black
          border-b-[8px] border-b-transparent"
        ></div>
      </div>
      <div
        style={{ fontFamily: "Tarrget" }}
        className="text-white Tarrget text-[15px] tracking-wider lg:text-xl font-light relative"
      >
        BLACKTUBE
      </div>
    </div>
  );
};

export default YouTubeLogo;
