"use client";

import { AiFillHome } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { MdSubscriptions } from "react-icons/md";

export default function Sidebar() {
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
          <span className="text-[10px]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
