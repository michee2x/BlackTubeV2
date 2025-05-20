"use client";

import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import YouTubeLogo from "./Youtubelogo";
import { useSearchContext } from "@/Context/SearchContext";
import { useSideBarContext } from "@/Context/SideBarContext";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { setShowSearchBar } = useSearchContext();
  const { showSideBar, setShowSideBar } = useSideBarContext();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // In most browsers, a history length of 1 means it's the first page
    if (window.history.length > 1) {
      setCanGoBack(true);
    }
  }, []);
  return (
    <header className="sticky pr-5 top-0 bg-black z-[9000] border-b border-[#303030] py-2 flex items-center justify-between">
      {/* Left Section: Logo and Search */}
      <div className="min-w-14 h-full flex items-center justify-center">
        <div className="w-16 ml-2 h-full flex items-center justify-center">
          <IoMenuOutline
            onClick={() => setShowSideBar(true)}
            className={`w-8 h-8 ${
              !showSideBar ? "block" : "hidden"
            } text-gray-400 cursor-pointer`}
          />
          <IoIosArrowDown
            onClick={() => setShowSideBar(false)}
            className={`text-3xl ${
              showSideBar ? "block" : "hidden"
            } text-gray-400 cursor-pointer`}
          />
        </div>
        <YouTubeLogo />
      </div>
      <div className="lg:flex lg:ml-6 hidden absolute transition -translate-x-1/2 left-1/2 items-center bg-[#303030] rounded-full px-4 py-2 w-[500px]">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white w-full"
        />
        <svg
          className="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        <FaArrowLeftLong
          onClick={() => router.back()}
          className={`lg:hidden text-xl ${
            !canGoBack ? "text-gray-500" : "text-white"
          }`}
        />
        <div className="w-10 h-10 lg:flex hidden overflow-hidden bg-gray-600 rounded-full">
          <img
            className="w-full h-full rounded-full  object-cover"
            src="https://i.imgur.com/G7oYvV1.png"
            alt=""
          />
        </div>
        <svg
          onClick={() => setShowSearchBar(true)}
          className="w-8 h-8 lg:hidden text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
    </header>
  );
};

export default Navbar;
