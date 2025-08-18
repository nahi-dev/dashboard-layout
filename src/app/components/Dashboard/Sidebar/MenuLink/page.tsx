"use client";
import React from "react";
import Link from "next/link";

import "./menulink.css";
import { usePathname } from "next/navigation";
interface MenuItem {
  title: string;

  path: string;
  icon?: React.ReactNode;
}

// Define the props for the component
interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  return (
    <div className="flex">
      <Link
        href={item.path}
        className={`menu_links ml-[20px] mr-[20px] py-2  flex flex-row gap-2 size-full rounded-md text-sm ${
          isActive ? "active" : ""
        }`}
      >
        {item.icon} <span>{item.title}</span>
      </Link>
    </div>
  );
};

export default MenuLink;
