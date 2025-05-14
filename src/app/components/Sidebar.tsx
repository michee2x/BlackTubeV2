"use client";

import { useSideBarContext } from "@/Context/SideBarContext";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { MdSubscriptions } from "react-icons/md";

const Menu = () => {
  const menu = [
    { icon: <AiFillHome size={24} />, label: "Home" },
    { icon: <BiVideoPlus size={24} />, label: "Shorts" },
    { icon: <MdSubscriptions size={24} />, label: "Subscriptions" },
    { icon: <CiUser size={24} />, label: "You" },
  ];

  return (
    <div className="flex flex-col items-center bg-black text-white py-4 w-full space-y-8">
      {menu.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition"
        >
          {item.icon}
          <span className="text-[10px] font-medium font-mono">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Sidebar() {
  const { showSideBar, setShowSideBar } = useSideBarContext();

  return (
    <aside
      className={`lg:w-[6%] w-screen transition-transform ease-in-out duration-300 ${
        !showSideBar ? "translate-y-full" : "-translate-x-0"
      }
      } z-[3000] fixed bg-black pt-16 top-0 lg:top-14 border-r border-[#303030] lg:flex flex-col items-center lg:py-4 h-screen`}
    >
      <Menu />
    </aside>
  );
}
