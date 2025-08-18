"use client";
import React from "react";
import "./navbar.css";
import {
  MdNotificationsNone,
  MdOutlineChat,
  MdManageSearch,
  MdPublic,
} from "react-icons/md";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar  ">
      {/* Take only the last word of the path name */}
      <div className="capitalize">{pathname.split("/").pop()}</div>
      <div className="icons">
        <div className="flex p-[10px] gap-2.5 bg-[#2e374a] rounded-[10px]">
          <MdManageSearch size={20} />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-[20px] items-center ">
          <MdOutlineChat size={20} />
          <MdNotificationsNone size={20} />

          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
