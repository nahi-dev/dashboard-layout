"use client";
import React from "react";
import { usePathname } from "next/navigation";
const NavTitle = () => {
  const pathname = usePathname();
  return <div className="capitalize"> {pathname?.split("/").pop() || ""}</div>;
};

export default NavTitle;
