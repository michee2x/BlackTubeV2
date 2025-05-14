"use client";
import React, { useState } from "react";
import { MdArrowLeft, MdCancel, MdSearch } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useSearchContext } from "@/Context/SearchContext";

const Search = () => {
  const { showSearchBar, setShowSearchBar } = useSearchContext();
  const [search, setSearch] = useState("");
  return (
    <div
      className={`w-screen ${
        showSearchBar ? "block" : "hidden"
      } min-h-screen fixed top-0 right-0 left-0 z-[10000] ${
        search ? "bg-black" : "bg-gray-950/60"
      }`}
    >
      <div className="w-full mt-2 bg-black px-3 h-10 flex items-center gap-4">
        <FaArrowLeft
          onClick={() => setShowSearchBar(false)}
          className="text-xl font-extralight text-white"
        />
        <div className="flex-1 px-2 gap-2.5 rounded-xl bg-gray-950 flex items-center h-full">
          <MdSearch className="text-xl text-gray-600" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="flex-1 border-0 outline-0 h-[98%]"
            placeholder="Search for videos"
          />
          <MdCancel
            className={`text-xl font-extralight ${
              search ? "block" : "hidden"
            } text-gray-400`}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
